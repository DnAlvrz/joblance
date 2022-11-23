const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDatabase = require('./config/db');
const port = process.env.PORT || 5000;
const app = express();
const cors = require('cors');
const morgan = require('morgan')
const passport = require('passport');
const path = require('path');
const cluster = require('cluster');
const totalCPUs = require('os').cpus().length;
const createRoles = require('./util/createRoles')

// Middle ware
const errorHandler = require('./middleware/error');

// Routes
const authRouter = require('./routes/auth');
const jobRouter = require('./routes/jobs');
const jobPhotoRouter = require('./routes/jobPhoto');
const contractRouter = require('./routes/contracts')
const offerRouter = require('./routes/offer');
const ratingRouter = require('./routes/rating')
const userRouter = require('./routes/user');
const chatRouter = require('./routes/conversation');
const messageRouter = require('./routes/message');
const applicationRouter =require('./routes/application');
const adminRouter =require('./routes/admin');

connectDatabase();
require('./models/Application');
app.use(cors());
app.disable('x-powered-by');
app.use(morgan('dev'));

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true, limit: '50mb', parameterLimit:100000}));
app.use(passport.initialize());
app.use('/uploads', express.static('files'))
require('./config/passport');

app.get('/test', (req, res)=> {
  res.sendFile(path.resolve('test/test.html'));
});

app.use('/api/v1/auth/', authRouter);
app.use('/api/admin/v1',passport.authenticate('jwt', {session:false}), adminRouter);
app.use('/api/v1/users/',passport.authenticate('jwt', {session:false}), userRouter);
app.use('/api/v1/chat/', passport.authenticate('jwt', {session:false}), chatRouter);
app.use('/api/v1/chat/message/', passport.authenticate('jwt', {session:false}), messageRouter);
app.use('/api/v1/contracts/', passport.authenticate('jwt', {session:false}), contractRouter);
app.use('/api/v1/jobs/', passport.authenticate('jwt', {session:false}), jobRouter);
app.use('/api/v1/photos/', passport.authenticate('jwt', {session:false}), jobPhotoRouter);
app.use('/api/v1/ratings/', passport.authenticate('jwt', {session:false}), ratingRouter);
app.use('/api/v1/offers/', passport.authenticate('jwt', {session:false}), offerRouter);
app.use('/api/v1/applications/',passport.authenticate('jwt', {session:false}), applicationRouter);

app.use(errorHandler);


if (cluster.isMaster){
  console.log(`Number of CPUs is ${totalCPUs}`);
  console.log(`Master ${process.pid} is running`);

  for(let i = 0; i < totalCPUs; i++){
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork();
  });
  createRoles.findOrCreateAdmin();
} else {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`.blue.underline);
  });
}




