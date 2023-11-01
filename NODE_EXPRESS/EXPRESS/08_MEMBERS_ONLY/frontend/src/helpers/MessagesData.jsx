import axios from 'axios';
import { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { ExampleData } from './ExampleData';


const MessagesData = () => {
  
  const [data, setData] = useState([]);


  const baseURL = `/api/messages/`;


  const fetchData =  useCallback(() => {
    axios.get(baseURL)
    .then(response => setData( response.data, ...data))
    .catch(error => console.log(error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  
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