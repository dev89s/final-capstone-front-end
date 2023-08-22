import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './AddRoom.css';
import { useSelector } from 'react-redux';

const AddRoom = () => {
  const user = useSelector((store) => store.user.userInfo);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();
    setError(false);
    if (name !== '' && description !== '' && price !== '') {
      axios
        .post('http://localhost:3000/api/v1/rooms', {
          room: {
            name,
            description,
            price,
            user_id: user.id,
          },
        })
        .then((response) => {
          if (response.status === 201) {
            setName('');
            setDescription('');
            setPrice('');
            navigate('/');
          }
        })
        .catch((err) => err && setError(true));
    } else {
      setError(true);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleAdd} className="room-form">
        <h1> New Room</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />

        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          required
        />
        {error && <span className="error">Please fix the error</span>}

        <button type="submit">Add Room</button>
      </form>
    </div>
  );
};

export default AddRoom;
