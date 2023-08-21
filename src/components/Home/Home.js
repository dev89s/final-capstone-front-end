import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Home.css';
import { fetchRooms } from './createSlice'; // Assuming you create a slice named dataSlice

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dataSlice.data);

  useEffect(() => {
    dispatch(fetchRooms()); // Dispatch the thunk action to fetch data
  }, [dispatch]);

  return (
    <div className="homepage">
      <div className="room-container">
        {data.map((room) => (
          <div className="room-item" key={room.id}>
            <h1>{room.name}</h1>
            <img src={room.image} alt={room.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
