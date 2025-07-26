import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        const fetchListings = async () => {
            const response = await fetch('/api/listings'); // Adjust the API endpoint as needed
            const data = await response.json();
            setListings(data);
        };

        fetchListings();
    }, []);

    const handleDelete = async (id) => {
        await fetch(`/api/listings/${id}`, {
            method: 'DELETE',
        });
        setListings(listings.filter(listing => listing.id !== id));
    };

    return (
        <div>
            <h1>Host Dashboard</h1>
            <Link to="/create-listing">Create New Listing</Link>
            <h2>Your Listings</h2>
            <ul>
                {listings.map(listing => (
                    <li key={listing.id}>
                        <h3>{listing.title}</h3>
                        <p>{listing.description}</p>
                        <button onClick={() => handleDelete(listing.id)}>Delete</button>
                        <Link to={`/edit-listing/${listing.id}`}>Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const DashboardPage = () => (
    <div>
        <Dashboard />
    </div>
);

export default DashboardPage;