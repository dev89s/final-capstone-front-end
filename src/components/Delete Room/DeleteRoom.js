import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms, fetchDeleteRoom } from '../../app/room/roomSlice';
import './DeleteRoom.css';

const DeleteRoom = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.room);
  const {
    roomList: rooms,
    isLoading,
    error,
  } = state;

  const handleDelete = (e) => {
    const { id } = e.target;
    dispatch(fetchDeleteRoom(id));
  };

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  if (isLoading) {
    return (<h2>Room list is loading...</h2>);
  }

  if (error) {
    return (
      <h2>
        {error}
      </h2>
    );
  }

  return (
    <div className="delete-room-page">
      <ul className="delete-list">
        {rooms.map((room) => (
          <li className="delete-list-item" key={room.id}>
            <h4>{room.name}</h4>
            <p>{room.description}</p>
            <button type="button" id={room.id} className="delete" onClick={handleDelete}>DeleteRoom</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteRoom;
