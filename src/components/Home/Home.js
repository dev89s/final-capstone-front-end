import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Home.css';
import { Link } from 'react-router-dom';
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
    <>
      <div className="select">
        <h1>LATEST ROOMS</h1>
        <p>Please select a room</p>
      </div>
      <div className="homepage">
        <div className="room-control1">
          <button type="button" onClick={slideLeft}>Slide Left</button>
        </div>
        <div className="room-container" ref={scrollContainerRef}>
          {data.map((room) => (
            <Link to={`/detail/${room.id}`} key={room.id} className="room-item">
              <img src={room.image} alt={room.name} />
              <h1>{room.name}</h1>
              <p>{room.description}</p>
            </Link>
          ))}
        </div>
        <div className="room-control2">
          <button type="button" onClick={slideRight}>Slide Right</button>
        </div>
      </div>
    </>
  );
};

export default Home;
