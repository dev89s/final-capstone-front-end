import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Home.css';
import { Link } from 'react-router-dom';
import { fetchRooms } from './createSlice';

const Home = () => {
  const [left, setLeft] = useState(0);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dataSlice.data);
  const rooms = [...data];
  if (rooms.length > 0) {
    rooms.sort((a, b) => a.id - b.id);
  }

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  const scrollContainerRef = useRef(null);

  const handleRightScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollBy({ left: 300, behavior: 'smooth' });
      setLeft(container.scrollLeft);
    }
  };

  const handleLeftScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollBy({ left: -300, behavior: 'smooth' });
      setLeft(container.scrollLeft);
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
          <button
            className={`${left === 0 && 'disabledButton'}`}
            type="button"
            disabled={left === 0}
            onClick={handleLeftScroll}
          >
            {'<'}
          </button>
        </div>
        <div className="room-container" ref={scrollContainerRef}>
          {rooms
            .filter((room) => room.active)
            .map((room) => (
              <Link
                to={`/detail/${room.id}`}
                key={room.id}
                className="room-item"
              >
                <img src={room.image} alt={room.name} />
                <h1>{room.name}</h1>
                <p>{room.description}</p>
              </Link>
            ))}
        </div>
        <div className="room-control2">
          <button
            className={`${
              scrollContainerRef?.current?.scrollWidth - left
                === scrollContainerRef?.current?.clientWidth && 'disabledButton'
            }`}
            disabled={
              scrollContainerRef?.current?.scrollWidth - left
              === scrollContainerRef?.current?.clientWidth
            }
            type="button"
            onClick={handleRightScroll}
          >
            {'>'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
