/* eslint-disable camelcase */
import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './Reserve.css';

const Reserve = () => {
  const { cities } = useSelector((store) => store.cities);

  const [room_id, setRoomId] = useState('');
  const [date, setDate] = useState('');
  const [city_id, setCityId] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const user = useSelector((store) => store.user.userInfo);

  const handleReserve = (e) => {
    e.preventDefault();
    setError(false);
    if (room_id !== '' && date !== '' && city_id !== '') {
      axios
        .post('http://localhost:3000/api/v1/reservations', {
          reservation: {
            room_id,
            date,
            city_id,
            user_id: user.id,
          },
        })
        .then((response) => {
          if (response.status === 201) {
            setRoomId('');
            setDate('');
            setCityId('');
            navigate('/my_reservations');
          }
        })
        .catch((err) => err && setError(true));
    } else {
      setError(true);
    }
  };

  const renderCities = () => cities.map((city) => (
    <option key={city.id} value={city.id}>
      {city.name}
    </option>
  ));

  return (
    <div className="reserve-container">
      <div className="background-overlay"> </div>
      <div className="form-container">
        <form onSubmit={handleReserve} className="reservation-form">
          <h1>Reserve Room</h1>
          <div className="input-row">
            <div className="input-container-1">
              <input
                type="text"
                value={room_id}
                onChange={(e) => setRoomId(e.target.value)}
                placeholder="Room ID"
                required
              />
            </div>
            <div className="input-container-3">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Date"
                required
              />
            </div>
            <div className="input-container-2">
              <select
                type="text"
                value={city_id}
                onChange={(e) => setCityId(e.target.value)}
                placeholder="City ID"
                required
              >
                {renderCities()}
              </select>
            </div>
          </div>

          {error && <span className="error">Please fix the error</span>}

          <button type="submit">Reserve Room</button>
        </form>
      </div>
    </div>
  );
};

export default Reserve;
