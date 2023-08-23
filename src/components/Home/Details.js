import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const Detail = () => {
  const { roomId } = useParams();
  const p = parseInt(roomId, 10);
  // console.log('roomId:', p + p);

  const data = useSelector((state) => state.dataSlice.data);
  // console.log('data:', data);

  const room = data.find((room) => room.id === p);
  // console.log('room:', room);

  if (!room) {
    return <div>Room not found.</div>;
  }

  return (
    <div>
      <h1>
        Room Details for Room {roomId}
      </h1>
      <div>
        <img src={room.image} alt={room.name} />
        <h2>{room.name}</h2>
        <p>{room.description}</p>
        <p>{room.price}</p>
      </div>
    </div>
  );
};

// No need for the unused prop type definition
export default Detail;
