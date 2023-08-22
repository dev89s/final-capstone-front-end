import React from 'react';
// import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

const Detail = ({ data }) => {
  const { roomId } = useParams();

  //   const data = useSelector((state) => state.dataSlice.data);

  const room = data.find((room) => room.id === roomId);

  return (
    <div>
      <h1>
        Room Details for Room
        {roomId}
      </h1>
      {room ? (
        <div>
          <img src={room.image} alt={room.name} />
          <h2>{room.name}</h2>
          <p>{room.description}</p>
        </div>
      ) : (
        <p>Room not found.</p>
      )}
    </div>
  );
};

Detail.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      // Add more PropTypes as needed for other room details
    }),
  ).isRequired,
};

export default Detail;
