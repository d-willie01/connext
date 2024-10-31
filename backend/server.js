const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const { auth } = require('express-openid-connect');

dotenv.config(); // Load environment variables

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: 'uwz8NErzr2EE1skPbh4nhOwuQiRfVL5d',
  issuerBaseURL: 'https://dev-hze3tt2ib00gwppc.us.auth0.com'
};

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for parsing JSON
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Simple route to test
app.get('/', (req, res) => {
  res.send('Backend for the Outreach App is running!');
});

const contactRoutes = require('./routes/contacts');
app.use('/api/contacts', contactRoutes);

app.use(auth(config));

app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
