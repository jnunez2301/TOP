import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { ExampleData } from './ExampleData';


const MessagesData = () => {
  
  const [data, setData] = useState([]);

  const baseURL = `http://localhost:3000/api/messages/`;

  const fetchData = () => {
    axios.get(baseURL)
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchData(); // Fetch initial data
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  //This must return data instead of newData;
  return {
    ExampleData,
    data,
    fetchData
  };
}

export default MessagesData