const Hostel = require('../models/hostel');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    return res.status(200).json({ message: 'Hostel route is working' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/all', async (req, res) => {
  try {
    const hostels = await Hostel.find({});
    return res.status(200).json(hostels);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/new', async (req, res) => {
  try {
    const hostel = new Hostel(req.body);
    await hostel.save();
    return res.status(201).json(hostel);
  } catch (error) {
    console.error('Error creating new hostel:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;