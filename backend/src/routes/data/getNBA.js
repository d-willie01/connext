const jwt = require('jsonwebtoken');
const axios = require('axios');
const NBAData = require('../../models/CacheNBA'); // Import the NBA data model

const getNBA = async (req, res) => {
    try {
        const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
        
        // Check for cached data in MongoDB
        const cachedData = await NBAData.findOne({ date: today });
        
        if (cachedData) {
            // If cached data exists and is current, return it
            return res.json(cachedData.data);
        }
        
        // If no cached data or it’s outdated, make the API call
        const response = await axios.get('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard');
        const nbaData = response.data;
        
        // Cache the new data in MongoDB
        await NBAData.updateOne(
            { date: today },
            { $set: { data: nbaData, createdAt: new Date() } },
            { upsert: true }  // Insert if it doesn’t exist
        );
        
        // Return the fresh data
        res.json(nbaData);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Unable to retrieve NBA data' });
    }
};

module.exports = { getNBA };
