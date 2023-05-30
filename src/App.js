import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LogInForm from './components/LogInForm';
import UserList from './components/UserList';
import AddNewUser from './components/AddNewUser';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/users' element={<UserList />} />
          <Route path='/' element={<LogInForm />} />
          <Route path='/add-user' element={<AddNewUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
