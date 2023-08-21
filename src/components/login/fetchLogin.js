async function fetchLogin(url = '', data = {}) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = response.json();
    return json;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export default fetchLogin;
