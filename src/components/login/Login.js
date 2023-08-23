import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import fetchLogin from './fetchLogin';
import Accessible from './Accessible';
import { setUserInfo } from '../../app/user/userSlice';

import './Login.css';

function Login() {
  const dispatch = useDispatch();
  const [username, updateUsername] = useState('');
  const [loginState, setLoginState] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:3000/api/v1/users/new_session';
    const login = await fetchLogin(url, { username });
    if (login.message === 'success') {
      setLoginState('logged in successfully');
      const user = JSON.stringify({ id: login.id, username: login.username });
      localStorage.setItem('username', user);
      dispatch(setUserInfo({ id: login.id, username: login.username }));
      setTimeout(() => {
        navigate('/');
      }, 800);
    } else if (login.message === 'user created') {
      setLoginState('username created');
      const user = JSON.stringify({ id: login.id, username: login.username });
      localStorage.setItem('username', user);
      dispatch(setUserInfo({ id: login.id, username: login.username }));
      setTimeout(() => {
        navigate('/');
      }, 800);
    }
  };

  return (
    <div className="login-page">
      <div className="background-tint">
        <div className="login-container">
          <div className="title-container">
            <h1 className="title">SummerWave</h1>
            <h1 className="title">Hotels</h1>
          </div>
          <Accessible />

          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="login-text-field"
              value={username}
              onChange={(e) => updateUsername(e.target.value)}
              placeholder="Username"
              required
            />
            <button className="login-submit" type="submit">Login</button>
          </form>

          {loginState && <p className="login-state">{loginState}</p>}

        </div>
      </div>
    </div>
  );
}

export default Login;
