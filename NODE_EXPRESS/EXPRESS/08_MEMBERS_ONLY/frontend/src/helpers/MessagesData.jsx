import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { ExampleData } from './ExampleData';


const MessagesData = () => {
  
  const [data, setData] = useState([]);

  const baseURL = `http://localhost:3000/api/messages/`;

  useEffect(() => {
    axios.get(baseURL)
    .then(response =>  
      setData(...data, response.data)
      )
    .catch(error => console.log(error))
  }, [])

  //This must return data instead of newData;
  return {
    ExampleData,
    data
  };
}

export default MessagesData