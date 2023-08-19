import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector
import axios from 'axios';
import './Home.css';
import { setData } from './actions';

const Home = () => {
  const dispatch = useDispatch(); // Get the dispatch function

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/rooms')
      .then((response) => {
        console.log('data:', response.data);
        dispatch(setData(response.data)); // Dispatch the action using the dispatch function
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [dispatch]);

  const data = useSelector((state) => state.data); // Use useSelector to get data from the store

  return (
    <div className="homepage">
      {data.map((room) => (
        <div className="item" key={room.id}>
          <h1>{room.name}</h1>
          <img src={room.image} alt={room.name} />
        </div>
      ))}
    </div>
  );
};

export default Home;
