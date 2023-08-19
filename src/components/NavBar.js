import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const params = useLocation();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(true);
  }, [params]);

  return (
    <>
      <div className="mobile">
        <button
          className="ham-menu"
          type="button"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg viewBox="0 0 100 80" width="40" height="40" fill="black">
              <rect width="100" height="10" />
              <rect y="30" width="100" height="10" />
              <rect y="60" width="100" height="10" />
            </svg>
          ) : (
            <p className="close-btn">X</p>
          )}
        </button>
      </div>
      <ul className={`nav ${open && 'open'}`}>
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
    </>
  );
};

export default NavBar;
