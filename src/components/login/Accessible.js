import React, { useEffect, useState } from 'react';
import fetchLogin from './fetchLogin';
import { API_URL } from '../../config/info';

function Accessible() {
  const [state, setState] = useState(true);

  const handleAvailable = async () => {
    const url = `${API_URL}/api/v1/users/start`;
    const available = await fetchLogin(url, { message: 'start' });
    if (available.message === 'welcome') {
      setState(true);
    } else {
      setState(false);
    }
  };

  useEffect(() => {
    handleAvailable();
  }, []);

  return (
    <div className="accessible">
      <span>
        {!state && (
          <h2 style={{ color: 'red', backgroundColor: 'cornsilk' }}>
            Backend not available
          </h2>
        )}
      </span>
    </div>
  );
}

export default Accessible;
