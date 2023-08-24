import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Details.css';

const Detail = () => {
  const { roomId } = useParams();
  const p = parseInt(roomId, 10);

  const data = useSelector((state) => state.dataSlice.data);

  const room = data.find((room) => room.id === p);

  if (!room) {
    return <div>Room not found.</div>;
  }

  const totalPayment = room.price;
  const monthlyPayment = Math.ceil(((room.price * 0.92) / 6) * 100) / 100;
  const totalDeposit = Math.ceil((room.price * 0.08) * 100) / 100;
  const totalInsatallmentPayment = Math.ceil(((monthlyPayment * 6) + totalDeposit) * 100) / 100;

  return (
    <>
      <div className="details-container">
        <div>
          <img src={room.image} alt={room.name} />
        </div>
        <div className="total-container">
          <div className="nam-room">
            <h2>{room.name}</h2>
            <p>
              $
              {totalDeposit}
              {' '}
              deposit upon any room booking
            </p>
          </div>
          <table className="details-table">
            <tbody>
              <tr>
                <td>Direct total amount per room:</td>
                <td>
                  $
                  {totalPayment}
                </td>
              </tr>
              <tr>
                <td>Monthly payment:</td>
                <td>
                  $
                  {monthlyPayment}
                </td>
              </tr>
              <tr>
                <td>Total installment:</td>
                <td>
                  $
                  {totalInsatallmentPayment}
                </td>
              </tr>
              <tr>
                <td>Duration:</td>
                <td>6 Months</td>
              </tr>
            </tbody>
          </table>
          <div className="describe-details">
            <p>{room.description}</p>
            <Link to={`reserve/${room.id}`}>RESERVE</Link>
          </div>
        </div>
      </div>
      <div className="back-b">
        <Link to="/">Back</Link>
      </div>
    </>
  );
};

// No need for the unused prop type definition
export default Detail;
