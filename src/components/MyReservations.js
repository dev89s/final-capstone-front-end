import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserReservations } from './api'; // Adjust the import path
import { setUserInfo } from '../app/user/userSlice';

import './MyReservations.css';

const MyReservations = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();

  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(setUserInfo(userInfo));
    const fetchReservations = async () => {
      try {
        const userReservations = await getUserReservations(userInfo.id);
        setReservations(userReservations);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchReservations();
  }, [dispatch, userInfo.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching reservations.</div>;
  }

  return (
    <div className="page-container">
      <div className="heading-container">
        <h2 className="heading">My Reservations</h2>
      </div>
      <div className="reservations-container">
        <table className="reservation-list">
          <thead>
            <tr>
              <th>Room</th>
              <th>Date</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id} className="reservation-item">
                <td>{reservation.room}</td>
                <td>{reservation.date}</td>
                <td>{reservation.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReservations;
