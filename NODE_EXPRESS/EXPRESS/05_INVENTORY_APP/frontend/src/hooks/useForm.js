import {  useState } from "react"
const useForm = () => {
  const [formData, setFormData] = useState({
    model: '',
    brand: {
      name: '',
      description: '',
    },
    description: '',
    price: '',
  });

  const [newData, setNewData] = useState([])
 

  

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    setNewData(formData);
    
  }

  return {
    onInputChange,
    handleSubmit,
    newData,
    formData
  }
}

export default useForm