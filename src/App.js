import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LogInForm from './components/LogInForm';
import UserList from './components/UserList';
import AddNewUser from './components/AddNewUser';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/users' element={<UserList users={users} />} />
          <Route
            path='/'
            element={<LogInForm users={users} setUsers={setUsers} />}
          />
          <Route
            path='/add-user'
            element={<AddNewUser users={users} setUsers={setUsers} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
