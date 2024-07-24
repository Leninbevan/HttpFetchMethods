import React, { useEffect, useState } from 'react';

const FetchDataComponent = () => {
  const [data, setData] = useState(null);

  // get data
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // post data

   const postData = () => {
    fetch('https://api.example.com/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key: 'value' }),
    })
      .then(response => response.json())
      .then(data => setResponse(data))
      .catch(error => console.error('Error posting data:', error));
  };

  // put data

   const updateData = () => {
    fetch('https://api.example.com/data/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key: 'updated value' }),
    })
      .then(response => response.json())
      .then(data => setResponse(data))
      .catch(error => console.error('Error updating data:', error));
  };

  // delete data

   const deleteData = () => {
    fetch('https://api.example.com/data/1', {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => setResponse(data))
      .catch(error => console.error('Error deleting data:', error));
  };

  
  return (
    <div>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FetchDataComponent;
