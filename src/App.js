import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setUsername } from './app/user/userSlice';
import Login from './components/login/Login';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authenticateUser = () => {
    if (!localStorage.getItem('username')) {
      navigate('/login');
    } else {
      dispatch(setUsername(localStorage.getItem('username')));
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <div className="main">
      <div className="app-body">
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
