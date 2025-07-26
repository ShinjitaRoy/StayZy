const express = require('express');
const router = express.Router();
const listingsController = require('../controllers/listingsController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to get all listings
router.get('/', listingsController.getAllListings);

// Route to get a specific listing by ID
router.get('/:id', listingsController.getListingById);

// Route to create a new listing
router.post('/', authMiddleware, listingsController.createListing);

// Route to update an existing listing
router.put('/:id', authMiddleware, listingsController.updateListing);

// Route to delete a listing
router.delete('/:id', authMiddleware, listingsController.deleteListing);

// Route to create a booking for a listing
router.post('/:id/book', authMiddleware, listingsController.createBooking);

module.exports = router;