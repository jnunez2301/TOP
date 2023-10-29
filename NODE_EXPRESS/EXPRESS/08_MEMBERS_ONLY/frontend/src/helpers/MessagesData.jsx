import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { newData } from './Data'

const MessagesData = () => {
  
  const [data, setData] = useState([]);

  const baseURL = `http://localhost:3000/api/messages/users/`;

  useEffect(() => {
    axios.get(baseURL)
    .then(response =>  console.log(response.data))
    .catch(error => console.log(error))
  }, [baseURL])

  //This must return data instead of newData;
  return newData;
}

export default MessagesData