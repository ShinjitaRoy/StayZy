import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ListingDetail = () => {
    const { id } = useParams();
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        const fetchListing = async () => {
            try {
                const response = await fetch(`/api/listings/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch listing');
                }
                const data = await response.json();
                setListing(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchListing();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            {listing && (
                <div>
                    <h1>{listing.title}</h1>
                    <img src={listing.image} alt={listing.title} />
                    <p>{listing.description}</p>
                    <p>Location: {listing.location}</p>
                    <p>Price: ${listing.price}</p>
                    <p>Availability: {listing.availability ? 'Available' : 'Not Available'}</p>
                    <div>
                        <label htmlFor="booking-date"><b>Select Booking Date:</b></label>
                        <input
                            type="date"
                            id="booking-date"
                            value={selectedDate}
                            onChange={e => setSelectedDate(e.target.value)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ListingDetail;