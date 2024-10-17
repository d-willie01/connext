const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for parsing JSON
app.use(express.json());

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


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
