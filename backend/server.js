const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDatabase = require('./config/db');
const port = process.env.PORT || 5000;
const app = express();
const cors = require('cors');
const morgan = require('morgan')
const passport = require('passport');
const path = require('path')
const errorHandler = require('./middleware/error');
const authRouters = require('./routes/auth');
const jobRouter = require('./routes/jobs');
const jobPhotoRouter = require('./routes/jobPhoto');
const contractRouter = require('./routes/contracts')
const offerRouter = require('./routes/offer');
const ratingRouter = require('./routes/rating')
const userRouter = require('./routes/user');
const chatRouter = require('./routes/conversation')

connectDatabase();
require('./models/Application');
app.use(cors());
app.disable('x-powered-by');
app.use(morgan('dev'));

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true, limit: '50mb', parameterLimit:100000}));
app.use(passport.initialize());
require('./config/passport')

app.get('/test', (req, res)=> {
  res.sendFile(path.resolve('test/test.html'));
})
app.use('/api/v1/auth', authRouters);
app.use('/api/v1/users',passport.authenticate('jwt', {session:false}), userRouter);
app.use('/api/v1/chat', passport.authenticate('jwt', {session:false}), chatRouter);
app.use('/api/v1/jobs/', passport.authenticate('jwt', {session:false}), jobRouter);
app.use('/api/v1/jobs/contracts/', passport.authenticate('jwt', {session:false}), contractRouter);
app.use('/api/v1/jobs/contracts/ratings/', passport.authenticate('jwt', {session:false}), ratingRouter);
app.use('/api/v1/jobs/offers/', passport.authenticate('jwt', {session:false}), offerRouter);
app.use('/api/v1/jobs/photos/', passport.authenticate('jwt', {session:false}), jobPhotoRouter);

app.use(errorHandler);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`.blue.underline);
})