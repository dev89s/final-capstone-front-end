import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Home.css';
import { fetchRooms } from './createSlice';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dataSlice.data);

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  const scrollContainerRef = useRef(null);

  const slideRight = () => {
    if (scrollContainerRef.current) {
      const roomWidth = scrollContainerRef.current.querySelector('.room-item').offsetWidth;
      const currentTransform = scrollContainerRef.current.style.transform;
      const currentTranslateX = parseInt(currentTransform.replace('translateX(', '').replace('px)', ''), 10);
      const newTranslateX = currentTranslateX - roomWidth * 3;
      scrollContainerRef.current.style.transform = `translateX(${newTranslateX}px)`;
    }
  };

  const slideLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.transform = 'translateX(0)';
    }
  };

  return (
    <div className="homepage">
      <div className="room-controls">
        <button type="button" onClick={slideLeft}>Slide Left</button>
        <button type="button" onClick={slideRight}>Slide Right</button>
      </div>
      <div className="room-container" ref={scrollContainerRef}>
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
