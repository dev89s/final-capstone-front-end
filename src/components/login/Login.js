import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import fetchLogin from './fetchLogin';
import Accessible from './Accessible';
import { setUserInfo } from '../../app/user/userSlice';

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
      <div className="title-container">
        <h1>Website Name</h1>
      </div>
      <Accessible />

      {loginState && <p style={{ color: 'green' }}>{loginState}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => updateUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
