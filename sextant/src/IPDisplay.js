
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IPDisplay = ({ version }) => {
  const [ip, setIp] = useState('Loading...');

  useEffect(() => {
    // Define the API URL based on the version prop
    const apiUrl = version === 'IPv4' ? 'https://api.ipify.org?format=json' : 'https://api6.ipify.org?format=json';

    axios
      .get(apiUrl)
      .then((response) => {
        setIp(response.data.ip);
      })
      .catch((error) => {
        console.error('Error fetching IP:', error);
        setIp('Error fetching IP');
      });
  }, [version]);

  return (
    <div className="ip-display">
      <h3>Your {version} Address</h3>
      <p>{ip}</p>
    </div>
  );
};

export default IPDisplay;
