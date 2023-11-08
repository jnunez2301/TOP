import { useState } from "react"
import axios from 'axios';

const useData = () => {
    const [data, setData] = useState([]);
    const [dataId, setDataId] = useState([]);
    const baseURL = 'https://jsonplaceholder.typicode.com/posts';
    const getData = () =>{
      axios.get(baseURL)
        .then(response => setData(response.data))
        .catch(error => console.log(error))
    }
   
    const dataById = (id) => {
      axios.get(`${baseURL}/${id}`)
      .then(response => setDataId(response.data))
      .catch(error => console.log(error))
    }
  return {
    data,
    dataId,
    dataById,
    getData,
    }
}

export default useData