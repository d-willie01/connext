const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { expressjwt: expressJwt } = require('express-jwt');
const cors = require('cors');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users/index')
const dataRouter = require('./routes/data/index')

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000 

// Middleware for parsing JSON
app.use(express.json());

// Enable CORS for all routes
app.use(cors());


var jwtFilter = function (req) {
  console.log(req.path);
  if (req.path.includes("/auth") || req.path.includes("/data")) {
    return true;
  }
  return false;
};

app.use(expressJwt({ secret: process.env.JWT_SECRET_KEY, algorithms:["HS256"] })
  .unless(jwtFilter));

  app.use(function (err, req, res, next) {
    if (err.name === "UnauthorizedError") {
      console.error(err);
      res.status(401).send({ error: "invalid_token" });
    } else {
      next(err);
    }
  });

// Simple route to test
app.get('/', (req, res) => {
  res.send('Backend for the Outreach App is running!');
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/auth', authRoute)
app.use('/users', userRoute)
app.use('/data', dataRouter)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});










