import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await axios.get('/api/listings');
                setListings(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchListings();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/listings/${id}`);
            setListings(listings.filter(listing => listing._id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Host Dashboard</h1>
            <Link to="/create-listing">
                <button style={{marginBottom: 16}}>Create New Listing</button>
            </Link>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 16}}>
                {listings.map(listing => (
                    <div key={listing._id} style={{border: '1px solid #ccc', borderRadius: 8, padding: 16, background: '#fff', width: 250}}>
                        <h2>{listing.title}</h2>
                        <p>{listing.description}</p>
                        <button onClick={() => handleDelete(listing._id)} style={{marginRight: 8}}>Delete</button>
                        <Link to={`/edit-listing/${listing._id}`}>Edit</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;