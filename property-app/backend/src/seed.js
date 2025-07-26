// filepath: backend/src/seed.js
const mongoose = require('mongoose');
const User = require('./models/User');
const Listing = require('./models/Listing');
const Booking = require('./models/Booking');

async function seed() {
  await mongoose.connect('mongodb://localhost:27017/stayfinder'); // adjust if needed

  await User.deleteMany({});
  await Listing.deleteMany({});
  await Booking.deleteMany({});

  const user = await User.create({ username: 'testuser', password: 'password' });
  const listing1 = await Listing.create({
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    location: 'New York',
    price: 120,
    description: 'A beautiful apartment in New York.'
  });
  const listing2 = await Listing.create({
    image: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80',
    location: 'Paris',
    price: 150,
    description: 'Charming flat in Paris.'
  });

  await Booking.create({
    listing: listing1._id,
    user: user._id,
    date: new Date()
  });

  console.log('Seed data inserted!');
  process.exit();
}

seed();