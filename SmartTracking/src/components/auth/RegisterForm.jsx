import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterForm({ onSubmit }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email, password, confirmPassword });
    };
    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h2>Login</h2>
        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        <input
            type="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
        />
        <button type="submit">Sign In</button>
        <p style={{ textAlign: 'center' }}>
            Ai deja cont?{' '}
            <Link to="/login">
            Conecteaza-te
            </Link>
        </p>
        </form>
    );
}