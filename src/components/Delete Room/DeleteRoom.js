import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms, fetchDeleteRoom } from '../../app/room/roomSlice';
import './DeleteRoom.css';
import trashCan from './delete-icon.svg';

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
          <li className="delete-list-item" style={{ backgroundImage: `url(${room.image})` }} key={room.id}>
            <div className="delete-background-tint">
              <h4 className="delete-room-name">{room.name}</h4>
              <p className="delete-room-description">
                {room.description.split(' ').slice(0, 10).join(' ')}
                {room.description.split(' ').length > 10 ? ('...') : ''}
              </p>
              <button type="button" id={room.id} className="delete-btn" onClick={handleDelete}>
                <img id={room.id} src={trashCan} alt="trash can" width={30} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteRoom;
