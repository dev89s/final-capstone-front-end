import { API_URL } from '../../config/info';

async function fetchDeleteRoomApi(id, url = `${API_URL}/api/v1/rooms`) {
  try {
    const newUrl = `${url}/${id}`;
    const response = await fetch(newUrl, {
      method: 'DELETE',
      mode: 'cors',
    });
    const json = response.json();
    return json;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export default fetchDeleteRoomApi;
