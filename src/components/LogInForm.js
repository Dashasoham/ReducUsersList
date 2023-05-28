import React from 'react';
import { useState, useRef } from 'react';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';
// import UserList from './UserList';

function LogInForm() {
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

  // const handleLinkClick = () => {
  //   navigate('/about'); // Redirect to '/about' path when link is clicked
  // };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '5rem',
        }}
      >
        <input
          ref={emailInputRef}
          type='email'
          placeholder='Email'
          className='mb-3'
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <input
          ref={passwordInputRef}
          type='password'
          placeholder='Password'
          className='mb-3'
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <Button>Submit</Button>
      </form>
      {/* <Button onClick={handleLinkClick}>Go to About</Button> */}
    </div>
  );
}

export default LogInForm;
