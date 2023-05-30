import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAddNewUser from './hook/UseAddNewUser';

function AddNewUser({ setUsers }) {
  const {
    nameInputRef,
    surnameInputRef,
    emailInputRef,
    handleUpdateUsersBtn,
  } = UseAddNewUser({ setUsers });

  // const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Link
          to='/users'
          style={{
            textDecoration: 'none',
            alignSelf: 'flex-end',
            marginTop: '5rem',
            marginLeft: '5rem',
          }}
        >
          BACK
        </Link>

        <Link
          to='/'
          style={{
            textDecoration: 'none',
            alignSelf: 'flex-end',
            marginTop: '5rem',
            marginRight: '5rem',
          }}
        >
          LOGOUT
        </Link>
      </div>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '10rem',
        }}
      >
        <input
          ref={nameInputRef}
          type='text'
          placeholder='Name'
          style={{ width: '25rem', marginBottom: '10px' }}
        />
        <input
          ref={surnameInputRef}
          type='text'
          placeholder='Surname'
          style={{ width: '25rem', marginBottom: '10px' }}
        />
        <input
          ref={emailInputRef}
          type='email'
          placeholder='Email'
          style={{ width: '25rem', marginBottom: '10px' }}
        />
        <Button type='submit' onClick={handleUpdateUsersBtn}>
          UPDATE USERS
        </Button>
      </form>
    </div>
  );
}

export default AddNewUser;
