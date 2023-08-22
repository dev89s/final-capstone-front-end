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
    if (response.status !== 404) {
      const json = response.json();
      return json;
    }
    return { message: 'Not found' };
  } catch (error) {
    // console.error(error);
    return error;
  }
}

export default fetchLogin;
