import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const history = useHistory();

    const handleRegister = async (userData) => {
        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            setSuccess(true);
            setTimeout(() => history.push('/login'), 1500); // Redirect after 1.5s
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Registration successful! Redirecting to login...</p>}
            <RegisterForm onRegister={handleRegister} />
        </div>
    );
};

export default Register;