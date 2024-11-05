const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust this path based on your structure
const router = express.Router();
const dotenv = require('dotenv');


const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

// Function to verify Google ID token
async function verifyGoogleToken(idToken) {
  const ticket = await client.verifyIdToken({
    idToken,
    audience: GOOGLE_CLIENT_ID,
  });
  const payload = ticket.getPayload();
  return payload;
}

// Function to create or find the user in MongoDB
async function findOrCreateUser(googleUser) {
  const { sub: googleId, email, name } = googleUser;
  let user = await User.findOne({ googleId });

  if (!user) {
    user = await User.create({ googleId, email, name });
  }

  return user;
}

// Function to generate a custom JWT for your app
function generateToken(user) {
  const payload = {
    userId: user._id,
    email: user.email,
  };
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
}

// Route handler
router.post('/', async (req, res) => {
  
  const { authentication: idToken } = req.body;


  try {
    // Verify Google ID token
    const googleUser = await verifyGoogleToken(idToken);

    // Create or find user in MongoDB
    const user = await findOrCreateUser(googleUser);

    // Generate a JWT for the user
    const jwtToken = generateToken(user);

    // Send the JWT back to the frontend
    res.json({ token: jwtToken });
  } catch (error) {

    console.error("Authentication error:", error);
    
    res.status(401).json({ error: "Authentication failed" });
  }
});

router.get('/', (req, res) => {
    const man = 'no get boi';
    res.send(man);
  });

module.exports = router;
