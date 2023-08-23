async function fetchRoomsApi(url = 'http://localhost:3000/api/v1/rooms') {
  try {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = response.json();
    return json;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export default fetchRoomsApi;
