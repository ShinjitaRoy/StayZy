import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const Login = () => {
    const [error, setError] = useState('');
    const history = useHistory();

    const handleLogin = async (userData) => {
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            // Store token in localStorage
            localStorage.setItem('token', data.token);
            // Redirect to homepage or dashboard
            history.push('/');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <LoginForm onLogin={handleLogin} />
        </div>
    );
};

export default Login;