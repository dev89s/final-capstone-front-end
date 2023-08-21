import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="main">
      <NavBar />
      <div className="app-body">
        <Routes>
        </Routes>
      </div>
    </div>
  );
}

export default App;
