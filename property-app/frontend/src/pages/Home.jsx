import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // <-- Add this import
import PropertyCard from '../components/PropertyCard';
import ListingDetailModal from '../components/ListingDetailModal';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Home = () => {
  const [listings, setListings] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    // Replace this fetch URL with your actual backend endpoint
    fetch('/api/listings')
      .then(res => res.json())
      .then(data => setListings(data))
      .catch(() => {
        // Fallback demo data if backend is not running
        setListings([
          {
            id: 1,
            image: 'https://a0.muscache.com/pictures/miso/Hosting-46441717/original/2b2100b6-3f44-47e4-9bc1-c2ed9edbc95f.jpeg',
            location: 'New York',
            price: 120,
            description: 'A beautiful apartment in New York.'
          },
          {
            id: 2,
            image: 'https://travelawaits.com/wp-content/uploads/2021/04/2fae3f394a5bceb3951dd3437910f2fae3f.jpg',
            location: 'Paris',
            price: 150,
            description: 'A cozy flat in the heart of Paris.'
          },
          {
            id: 3,
            image: 'https://media.timeout.com/images/105975410/750/562/image.jpg',
            location: 'Tokyo',
            price: 100,
            description: 'Modern studio in Tokyo.'
          },
          {
            id: 4,
            image: 'https://a0.muscache.com/im/pictures/19eaa02d-921a-4860-803f-1f5de79a0999.jpg?im_w=720',
            location: 'Kerala',
            price: 90,
            description: 'Traditional Kerala house.'
          },
          {
            id: 5,
            image: 'https://hips.hearstapps.com/hmg-prod/images/airbnb-grand-piano-london-6703bb21b7a9d.jpeg?crop=0.75xw:1xh;center,top&resize=980:*',
            location: 'London',
            price: 180,
            description: 'Luxurious apartment in London.'
          },
          {
            id: 6,
            image: 'https://a0.muscache.com/pictures/e1150f00-a0f1-48a0-89a7-10d604aa2891.jpg',
            location: 'Sydney',
            price: 170,
            description: 'Beachside apartment in Sydney.'
          },
          {
            id: 7,
            image: 'https://media.timeout.com/images/105959145/750/562/image.jpg',
            location: 'Cape Town',
            price: 110,
            description: 'Spacious home in Cape Town.'
          },
          {
            id: 8,
            image: 'https://a0.muscache.com/im/pictures/b8bf03b7-801b-4eda-8545-a6af27508883.jpg?im_w=720',
            location: 'Barcelona',
            price: 100,
            description: 'Charming apartment in Barcelona.'
          },
          {
            id: 9,
            image: 'https://a0.muscache.com/im/pictures/e5d632ca-2e52-4cbc-8ecb-bc26fc400714.jpg?im_w=720',
            location: 'Switzerland',
            price: 180,
            description: 'Peace in the hills in Switzerland.'
          },
          {
            id: 10,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ooD9vnrg21Kn1GRAxPmVZMiubmEeSLOUUQ&s',
            location: 'Germany',
            price: 130,
            description: 'Calmness in dreamyland in Germany.'
          },
          {
            id: 11,
            image: 'https://offloadmedia.feverup.com/secretauckland.com/wp-content/uploads/2021/08/27075818/the-dacha-2-1.jpg',
            location: 'New Zealand',
            price: 200,
            description: 'Ultimate luxury in the heart of the  nature in New Zealand.'
          },
          {
            id: 12,
            image: 'https://preview.redd.it/6y1wruirkju91.jpg?width=640&crop=smart&auto=webp&s=c56c8eff50475166ff12475bda6b0451b8d19ecb',
            location: 'Brazil',
            price: 110,
            description: 'Beach-house in Brazil.'
          },
        ]);
      });
  }, []);

  const handleSearch = () => {
    const params = [];
    if (destination) params.push(`location=${encodeURIComponent(destination)}`);
    if (minPrice) params.push(`minPrice=${minPrice}`);
    if (maxPrice) params.push(`maxPrice=${maxPrice}`);
    if (checkIn) params.push(`checkIn=${checkIn}`);
    if (checkOut) params.push(`checkOut=${checkOut}`);
    const query = params.length ? `?${params.join('&')}` : '';
    fetch(`/api/listings${query}`)
      .then(res => res.json())
      .then(data => setListings(data));
  };

  return (
    <div className="home-container">
      {/* Add navigation buttons here */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginBottom: '12px' }}>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/register"><button>Register</button></Link>
      </div>
      <div className="title-bg">
        <img src="/logo.png" alt="StayFinder Logo" className="logo-img" />
        <h1 className="main-title">StayZy</h1>
      </div>
      {/* Airbnb-style search bar */}
      <div className="search-bar">
        <div className="search-field">
          <label>Where</label>
          <input
            type="text"
            placeholder="Search destinations"
            value={destination}
            onChange={e => setDestination(e.target.value)}
          />
        </div>
        <div className="search-field">
          <label>Check in</label>
          <input
            type="date"
            value={checkIn}
            onChange={e => setCheckIn(e.target.value)}
          />
        </div>
        <div className="search-field">
          <label>Check out</label>
          <input
            type="date"
            value={checkOut}
            onChange={e => setCheckOut(e.target.value)}
          />
        </div>
        <div className="search-field">
          <label>Who</label>
          <input
            type="number"
            min="1"
            value={guests}
            onChange={e => setGuests(e.target.value)}
            style={{ width: 60 }}
          />
        </div>
        <div className="search-field">
          <label>Min Price</label>
          <input
            type="number"
            min="0"
            value={minPrice}
            onChange={e => setMinPrice(e.target.value)}
            style={{ width: 80 }}
          />
        </div>
        <div className="search-field">
          <label>Max Price</label>
          <input
            type="number"
            min="0"
            value={maxPrice}
            onChange={e => setMaxPrice(e.target.value)}
            style={{ width: 80 }}
          />
        </div>
        <button className="search-btn" onClick={handleSearch}>
          <span role="img" aria-label="search">🔍</span>
        </button>
      </div>

      {/* Add the map here */}
      <MapContainer center={[20, 0]} zoom={2} style={{ height: 300, width: '100%', marginBottom: 32 }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {listings.map(listing => (
          listing.lat && listing.lng && (
            <Marker key={listing._id || listing.id} position={[listing.lat, listing.lng]}>
              <Popup>
                <b>{listing.location}</b><br />
                ${listing.price}
              </Popup>
            </Marker>
          )
        ))}
      </MapContainer>

      <h2 className="subtitle">Available Properties</h2>
      <div className="property-cards">
        {listings.map(property => (
          <PropertyCard
            key={property.id}
            property={property}
            onViewDetails={setSelectedProperty}
          />
        ))}
      </div>
      {selectedProperty && (
        <ListingDetailModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div>
  );
};

export default Home;