import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => (
  <div className="property-card">
    <img src={property.image} alt={property.location} />
    <h3>{property.location}</h3>
    <p><b>Price:</b> ${property.price}</p>
    <Link to={`/listing/${property._id || property.id}`}>
      <button>View Details</button>
    </Link>
  </div>
);

export default PropertyCard;