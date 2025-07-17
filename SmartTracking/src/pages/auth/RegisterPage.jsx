import React from 'react';
import RegisterForm from '../../components/auth/RegisterForm';

export default function RegisterPage() {
  const handleRegister = async ({ email, password, confirmPassword }) => {
    console.log('Registered with:', email, password, confirmPassword);
  };

  return (
    <div>
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
}
