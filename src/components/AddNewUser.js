import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import { useRef } from 'react';
// import userImage from '../pictures/avatar.png';
import UseAddNewUser from './hook/UseAddNewUser';

function AddNewUser({ users, setUsers }) {
  const {
    nameInputRef,
    surnameInputRef,
    emailInputRef,
    handleUpdateUsersBtn,
  } = UseAddNewUser(users, setUsers);
  // const nameInputRef = useRef();
  // const surnameInputRef = useRef();
  // const emailInputRef = useRef();

  const navigate = useNavigate();

  // const handleUpdateUsersBtn = (e) => {
  //   e.preventDefault();

  //   const newUser = {
  //     id: users.length + 1, // Generate a unique ID for the new user
  //     name: nameInputRef.current.value,
  //     email: emailInputRef.current.value,
  //     surname: surnameInputRef.current.value,
  //     avatar: userImage,
  //   };

  //   setUsers((prevUsers) => [...prevUsers, newUser]);
  //   navigate('../users');
  // };

  return (
    <div>
      <Button onClick={() => navigate('../users')}>Back</Button>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '5rem',
        }}
      >
        <input ref={nameInputRef} type='text' placeholder='Name' />
        <input ref={surnameInputRef} type='text' placeholder='Surname' />
        <input ref={emailInputRef} type='email' placeholder='Email' />
        <Button type='submit' onClick={handleUpdateUsersBtn}>
          UPDATE USERS
        </Button>
      </form>
    </div>
  );
}

export default AddNewUser;
