// models/NBAGameCache.js
const mongoose = require('mongoose');

const CacheNBA = new mongoose.Schema({
  date: { type: String, required: true, unique: true }, // This will be the key to find or delete the data daily
  data: { type: Object, required: true }, // Store the entire API response as-is
  createdAt: { type: Date, default: Date.now, expires: 86400 }, // Track when it was cached for deletion purposes
});

module.exports = mongoose.model('NBA Data', CacheNBA);

