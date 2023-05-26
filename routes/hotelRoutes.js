const express = require('express');
const router = express.Router();
const {
  createHotel,
  getHotels,
  updateHotel,
  deleteHotel,
  toggleHotel,
  approveHotel,
  rejectHotel
} = require('../controllers/hotelControlller');

router.post('/createHotel', createHotel);
router.get('/Hotels', getHotels);
router.put('/updateHotel/:id', updateHotel);
router.delete('/deleteHotel/:id', deleteHotel);
router.put('/enable/:id', toggleHotel);
router.put('/approve/:id/accept', approveHotel);
router.delete('/approve/:id/reject', rejectHotel);

module.exports = router;
