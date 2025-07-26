import React, { useState } from 'react';

const ListingDetailModal = ({ property, onClose }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleBook = async () => {
    const token = localStorage.getItem('token');
    await fetch(`/api/listings/${property.id}/book`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ date: selectedDate })
    });
    // Show success or error
  };

  const handleMockPayment = () => {
    alert('Payment successful! (This is a mock payment)');
  };

  if (!property) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <img src={property.image} alt={property.location} style={{ width: '100%', borderRadius: 12, marginBottom: 16 }} />
        <h2>{property.location}</h2>
        <p><b>Price:</b> ${property.price}</p>
        <p><b>Description:</b> {property.description || 'No description available.'}</p>
        <div>
          <label><b>Select Booking Date:</b></label>
          <input
            type="date"
            value={selectedDate}
            onChange={e => setSelectedDate(e.target.value)}
            style={{ marginLeft: 8 }}
          />
        </div>
        <button onClick={handleBook}>Book</button>
        <button onClick={handleMockPayment} style={{marginTop: 12, background: '#00b894', color: '#fff'}}>Pay & Book</button>
      </div>
    </div>
  );
};

export default ListingDetailModal;