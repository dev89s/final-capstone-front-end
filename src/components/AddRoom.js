import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './AddRoom.css';
import { useSelector } from 'react-redux';
import { API_URL } from '../config/info';

const AddRoom = () => {
  const user = useSelector((store) => store.user.userInfo);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();
    setError(false);
    if (name !== '' && description !== '' && price !== '' && image !== '') {
      axios
        .post(`${API_URL}/api/v1/rooms`, {
          room: {
            name,
            image,
            description,
            price,
            user_id: user.id,
          },
        })
        .then((response) => {
          if (response.status === 201) {
            setName('');
            setImage('');
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
        <h1 className="form-title"> New Room</h1>
        <label className="form-label" htmlFor="name">
          Name
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="form-label" htmlFor="image">
          Image
          <input
            id="image"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </label>
        <label className="form-label" htmlFor="name">
          Description
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label className="form-label" htmlFor="name">
          Price
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        {error && <span className="error">Please fix the error</span>}

        <button type="submit" className="form-submit">
          Add Room
        </button>
      </form>
    </div>
  );
};

export default AddRoom;
