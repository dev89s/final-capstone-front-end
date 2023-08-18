import React from 'react';
import './NavBar.css';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const params = useLocation();
  return (
    <ul className="nav">
      <li className="logo">Logo</li>
      <span className="links">
        <li className={`${params.pathname === '/' && 'active'}`}>
          <Link className="link" to="/">
            Room
          </Link>
        </li>
        <li
          className={`${
            params.pathname.split('/')[1] === 'reserve' && 'active'
          }`}
        >
          <Link className="link" to="/reserve">
            Reserve
          </Link>
        </li>
        <li
          className={`${
            params.pathname.split('/')[1] === 'my_reservations' && 'active'
          }`}
        >
          <Link className="link" to="/my_reservations">
            My Reservations
          </Link>
        </li>
        <li
          className={`${
            params.pathname.split('/')[1] === 'add_room' && 'active'
          }`}
        >
          <Link className="link" to="/add_room">
            Add Room
          </Link>
        </li>
        <li
          className={`${
            params.pathname.split('/')[1] === 'delete_room' && 'active'
          }`}
        >
          <Link className="link" to="/delete_room">
            Delete Room
          </Link>
        </li>
      </span>
      <li>
        <ul className="social">
          <li>X</li>
          <li>F</li>
          <li>I</li>
        </ul>
      </li>
    </ul>
  );
};

export default NavBar;
