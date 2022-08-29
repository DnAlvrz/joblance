const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDatabase = require('./config/db');
const port = process.env.PORT || 5000;
const app = express();
const cors = require('cors');
const morgan = require('morgan')
const authRouters = require('./routes/auth');
const errorHandler = require('./middleware/error');
const passport = require('passport');


connectDatabase();
app.disable('x-powered-by')
//log requests
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(passport.initialize());
require('./config/passport')

app.use('/api/auth', authRouters);
app.use('/api/protected', passport.authenticate('jwt', {session:false}), (req, res)=> {
  res.status(200).json(req.user)
});
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`.blue.underline);
})