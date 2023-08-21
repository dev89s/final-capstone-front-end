import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './app/store';

import App from './App';
import AddRoom from './components/AddRoom';
import NavBar from './components/NavBar';
import Reserve from './components/Reserve';
import MyReservations from './components/MyReservations';
import DeleteRoom from './components/DeleteRoom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <div className="main">
        <NavBar />
        <div className="app-body">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/my_reservations" element={<MyReservations />} />
            <Route path="/add_room" element={<AddRoom />} />
            <Route path="/delete_room" element={<DeleteRoom />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </Provider>,
  // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
