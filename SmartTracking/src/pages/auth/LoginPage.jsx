import React from 'react';
import LoginForm from '../../components/auth/LoginForm';
import { loginUser , getUserData } from '../../api/authApi';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

export default function LoginPage() {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const handleLogin = async ({ email, password }) => {
    try {
      const response = await loginUser({ email, password });
      const rsp = await getUserData(email);

      setUser(rsp.data);
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}
