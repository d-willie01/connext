const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Create a new contact
router.post('/add', async (req, res) => {
  try {
    const { name, phone, email } = req.body;
    const newContact = new Contact({ name, phone, email });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(500).json({ message: 'Error adding contact', error: err });
  }
});

// Get all contacts
router.get('/all', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching contacts', error: err });
  }
});

module.exports = router;
