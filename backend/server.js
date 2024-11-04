const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoute = require('./routes/auth');


dotenv.config(); // Load environment variables



const app = express();
const PORT = process.env.PORT

// Middleware for parsing JSON
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Simple route to test
app.get('/', (req, res) => {
  res.send('Backend for the Outreach App is running!');
});

app.use('/api/auth', authRoute)







app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
