import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import './Home.css';
import { setData } from './actions'; // Create this action to set data in Redux

const Home = ({ data, setData }) => {
  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/rooms')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [setData]);

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

Home.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  setData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data, // Assuming you have a reducer named 'data' in your Redux store
});

const mapDispatchToProps = {
  setData, // Action creator to set data in Redux
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
