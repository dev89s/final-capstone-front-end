import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './Home.css';
import { setData } from './actions'; // Create this action to set data in Redux

const Home = ({ data, setData }) => {
  useEffect(() => {
    axios.get('your_api_endpoint_here')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [setData]);

  return (
    <div className="homepage">
      {data.map(item => (
        <div className="item" key={item.id}>
          <img src={item.imageUrl} alt={item.name} />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.data // Assuming you have a reducer named 'data' in your Redux store
});

const mapDispatchToProps = {
  setData // Action creator to set data in Redux
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
