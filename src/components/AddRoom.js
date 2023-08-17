import axios from 'axios';
import React, { useState } from 'react';

const AddRoom = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const handleAdd = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/api/v1/rooms', {
        room: {
          name,
          description,
          price,
          user_id: 1,
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form>
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

        <button type="submit" onClick={(e) => handleAdd(e)}>
          Add Room
        </button>
      </form>
    </div>
  );
};

export default AddRoom;
