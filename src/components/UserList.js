import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import UseUserList from './hook/UseUserList';

function UserList() {
  const {
    searchTerm,
    setSearchTerm,
    searchResult,

    handleSearch,
    handleBack,
    userList,
  } = UseUserList();
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
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
      <form
        onSubmit={handleSearch}
        style={{
          display: 'flex',

          flexDirection: 'column',
          alignItems: 'flex-start',
          marginTop: '5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: '1rem',
          }}
        >
          <Button
            onClick={() => navigate('/add-user')}
            style={{
              backgroundColor: '#99627A',
              borderColor: '#99627A',
              alignSelf: 'flex-start',
            }}
          >
            Add New User
          </Button>
        </div>
        <div>
          <input
            type='search'
            placeholder='Search'
            className='mb-3 mt-3'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '25rem' }}
          />
          <Button
            onClick={handleSearch}
            // className='mb-3 mt-3'
            style={{
              backgroundColor: '#99627A',
              borderColor: '#99627A',
            }}
          >
            Search
          </Button>
        </div>
      </form>
      {searchResult && (
        <Link
          onClick={handleBack}
          style={{
            textDecoration: 'none',
            alignSelf: 'flex-start',
            marginLeft: '5rem',
          }}
        >
          BACK
        </Link>
      )}
      <table
        style={{
          width: '80%',
          margin: '0 auto',
          borderCollapse: 'collapse',
        }}
      >
        <tbody>
          {searchResult ? (
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <img
                  src={searchResult.avatar}
                  alt='User Avatar'
                  style={{ width: '40px', height: '40px' }}
                />
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                {searchResult.name}
                <br />
                {searchResult.surname}
                <br />
                {searchResult.email}
              </td>
            </tr>
          ) : (
            userList.map((user) => (
              <tr key={user.id}>
                <td
                  style={{
                    border: '1px solid black',
                    padding: '8px',
                  }}
                >
                  <img
                    src={user.avatar}
                    alt='User Avatar'
                    style={{ width: '40px', height: '40px' }}
                  />
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  {user.name}
                  <br />
                  {user.email}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
