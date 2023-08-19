import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AddRoom from './components/AddRoom';
import NavBar from './components/NavBar';
import Reserve from './components/Reserve';
import MyReservations from './components/MyReservations';
import DeleteRoom from './components/DeleteRoom';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="main">
      <NavBar />
      <div className="app-body">
        <Routes>
          <Route path="/" element={<Home />} />
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
