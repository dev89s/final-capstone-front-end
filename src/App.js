import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './components/login/Login';

function App() {
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
