import axios from 'axios';
import React, { useState } from 'react';

import './AddRoom.css';

const AddRoom = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (name !== '' && description !== '' && price !== '') {
      axios
        .post('http://localhost:3000/api/v1/rooms', {
          room: {
            name,
            description,
            price,
            user_id: 1,
          },
        })
        .then((response) => {
          setName('');
          setDescription('');
          setPrice('');
          console.log(response);
        })
        .catch((err) => console.log(err));
    } else {
      console.log('error');
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

        <button type="submit">Add Room</button>
      </form>
    </div>
  );
};

export default AddRoom;
