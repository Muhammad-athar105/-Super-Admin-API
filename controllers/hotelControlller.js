const Hotel = require('../models/hotelModel');

// Create a new hotel
const createHotel = async (req, res) => {
  try {
    const hotel = await Hotel.create(req.body);
    res.status(201).json({message: "Hotel added successfully"});
  } catch (error) {
    res.status(500).json({ error: 'Failed to create hotel' });
  }
};

// Get all hotels
const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve hotels' });
  }
};

// Update a hotel
const updateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!hotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }
    res.json({message: "Update hotel successfully"});
  } catch (error) {
    res.status(500).json({ error: 'Failed to update hotel' });
  }
};

// Delete a hotel
const deleteHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndRemove(req.params.id);
    if (!hotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }
    res.sendStatus(204).json({message: "Delete Hotel Successfully"});
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete hotel' });
  }
};

// Enable or disable a hotel
const toggleHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }
    hotel.enabled = !hotel.enabled;
    await hotel.save();
    res.json({message : "Hotel enabled successfully"});
  } catch (error) {
    res.status(500).json({ error: 'Failed to toggle hotel' });
  }
};

//Hotel Approve Section
const approveHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { approved: true },
      { new: true }
    );
    if (!hotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }
    res.json({ message: 'Hotel registration approved' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to approve hotel registration' });
  }
};

//Hotel Reject Section
const rejectHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndRemove(req.params.id);
    if (!hotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }
    res.json({ message: 'Hotel registration rejected' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to reject hotel registration' });
  }
};

module.exports = { createHotel, getHotels, updateHotel, deleteHotel, toggleHotel, approveHotel, rejectHotel };

