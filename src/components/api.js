/* eslint-disable linebreak-style */
/* eslint-disable no-useless-catch */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import axios from 'axios';
import { API_URL } from '../config/info';

const baseUrl = API_URL;

export const getUserReservations = async (userId) => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/v1/reservations?user_id=${userId}`,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
