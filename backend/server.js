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
const authRouters = require('./routes/auth');
const jobRouter = require('./routes/jobs');
const errorHandler = require('./middleware/error');


connectDatabase();
app.disable('x-powered-by')
app.use(morgan('dev'));

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true, limit: '50mb', parameterLimit:100000}));
app.use(cors());
app.use(passport.initialize());
require('./config/passport')

app.get('/test', (req, res)=> {
  res.sendFile(path.resolve('test.html'));
})
app.use('/api/auth', authRouters);
app.use('/api/jobs', passport.authenticate('jwt', {session:false}), jobRouter);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`.blue.underline);
})