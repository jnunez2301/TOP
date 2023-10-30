import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { newData } from './Data';


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
    newData,
    data
  };
}

export default MessagesData