import React from 'react';
import { Button } from 'reactstrap';
import UseLogInForm from './hook/UseLogInForm';

function LogInForm() {
  const {
    setEmailInput,
    setPasswordInput,
    emailInputRef,
    passwordInputRef,
    handleFormSubmit,
  } = UseLogInForm();

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
    </div>
  );
}

export default LogInForm;
