import React from 'react';
import { RegisterForm } from '../components/forms/RegisterForm';
import { RegisterHeader } from '../components/headers/RegisterHeader';

function RegisterPage() {
  return (
    <>
      <RegisterHeader />
      <RegisterForm />
    </>
  );
}

export default RegisterPage;
