import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const UseLogInForm = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(emailInputRef.current.value);
    console.log(passwordInputRef.current.value);

    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailInput,
          password: passwordInput,
        }),
      });

      if (response.ok) {
        // Successful login
        const data = await response.json();
        console.log('Login successful:', data.token);
        navigate('/users');
      } else {
        // Invalid credentials
        console.log('Invalid email or password');
      }
    } catch (error) {
      console.log('Error occurred while logging in:', error);
    }
  };

  return {
    emailInput,
    passwordInput,
    setEmailInput,
    setPasswordInput,
    emailInputRef,
    passwordInputRef,
    handleFormSubmit,
  };
};

export default UseLogInForm;
