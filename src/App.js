import React, { useEffect, useState } from 'react';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setUserInfo } from './app/user/userSlice';
import Login from './components/login/Login';
import AddRoom from './components/AddRoom';
import NavBar from './components/NavBar';
import Reserve from './components/Reserve';
import MyReservations from './components/MyReservations';
import DeleteRoom from './components/DeleteRoom';
import Home from './components/Home/Home';
import Detail from './components/Home/Details';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [loginPage, setLoginPage] = useState(false);

  const authenticateUser = () => {
    if (!localStorage.getItem('username')) {
      navigate('/login');
    } else {
      const user = JSON.parse(localStorage.getItem('username'));
      dispatch(setUserInfo(user));
    }
  };

  useEffect(() => {
    if (location.pathname === '/login') {
      setLoginPage(true);
    } else {
      setLoginPage(false);
    }
  }, [location]);

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <div className="main">
      {!loginPage && <NavBar />}
      <div className="app-body">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/Detail" element={<Detail />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/my_reservations" element={<MyReservations />} />
          <Route path="/add_room" element={<AddRoom />} />
          <Route path="/delete_room" element={<DeleteRoom />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
