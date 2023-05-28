import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

function UserList({ users }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    const result = users.find((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResult(result);
  };

  return (
    <div>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '5rem',
        }}
      >
        <Button
          onClick={() => navigate('/add-user')}
          style={{ alignItems: 'start', backgroundColor: 'DodgerBlue' }}
        >
          Add New User
        </Button>
        <div>
          <input
            type='search'
            placeholder='Search'
            className='mb-3'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
      </form>

      <Link to='/'>Go back to Home</Link>

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
            users.map((user) => (
              <tr key={user.id}>
                <td style={{ border: '1px solid black', padding: '8px' }}>
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
