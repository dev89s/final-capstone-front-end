import { API_URL } from '../config/info';

const fetchLogin = async (url = '', data = {}) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.status !== 404) {
      const json = response.json();
      return json;
    }
    return { message: 'Not found' };
  } catch (error) {
    // console.error(error);
    return error;
  }
};

const backendCheck = async () => {
  const url = `${API_URL}/api/v1/users/start`;
  const available = await fetchLogin(url, { message: 'start' });
  if (available.message === 'welcome') {
    return true;
  }
  return false;
};

export default backendCheck;
