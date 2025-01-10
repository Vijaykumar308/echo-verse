import { useState, useEffect } from 'react';

function useAuthenticated() {
  const storedToken = sessionStorage.getItem('token');

  const [token, setToken] = useState(storedToken || null);

  useEffect(() => {
    if (token) {
      sessionStorage.setItem('token', token); 
    } else {
      sessionStorage.removeItem('token'); 
    }
  }, [token]);

  return { token, setToken };
}

export default useAuthenticated;