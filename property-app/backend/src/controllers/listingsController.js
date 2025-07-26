const Listing = require('../models/Listing');
const Booking = require('../models/Booking'); // Use the correct filename

exports.getAllListings = async (req, res) => {
    try {
        // Add filter logic here
        const { location, minPrice, maxPrice } = req.query;
        let filter = {};
        if (location) filter.location = new RegExp(location, 'i');
        if (minPrice) filter.price = { ...filter.price, $gte: Number(minPrice) };
        if (maxPrice) filter.price = { ...filter.price, $lte: Number(maxPrice) };

        const listings = await Listing.find(filter);
        res.status(200).json(listings);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving listings', error });
    }
};

exports.getListingById = async (req, res) => {
    const { id } = req.params;
    try {
        const listing = await Listing.findById(id);
        if (!listing) {
            return res.status(404).json({ message: 'Listing not found' });
        }
        res.status(200).json(listing);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving listing', error });
    }
};

exports.createListing = async (req, res) => {
  // ...implementation...
};

exports.createBooking = async (req, res) => {
    const { id } = req.params;
    const { date } = req.body;
    const userId = req.user.id;

    try {
        const listing = await Listing.findById(id);
        if (!listing) {
            return res.status(404).json({ message: 'Listing not found' });
        }

        const existingBooking = await Booking.findOne({ listing: id, date });
        if (existingBooking) {
            return res.status(400).json({ message: 'Listing already booked for this date' });
        }

        const booking = new Booking({
            listing: id,
            user: userId,
            date
        });
        await booking.save();

        res.status(201).json({ message: 'Booking successful', booking });
    } catch (error) {
        res.status(500).json({ message: 'Error creating booking', error });
    }
};

exports.updateListing = async (req, res) => {
    try {
        const updated = await Listing.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: 'Listing not found' });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: 'Error updating listing', error });
    }
};

exports.deleteListing = async (req, res) => {
    try {
        const deleted = await Listing.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Listing not found' });
        res.json({ message: 'Listing deleted' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting listing', error });
    }
};