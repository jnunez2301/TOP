import  { useState } from 'react'

const userForm = () => {

    const [ inputValue, setInputValue ] = useState('');
    const [ formData, setFormData ] = useState();

    const handleForm = (event) =>{
        event.preventDefault();
        setNew
    }
    
    const onInputChange = (event) =>{
        const { name, value } = event.target;
        setFormData({...formData, [name]: value});
    }

    


  return (
    <div>userForm</div>
  )
}

export default userForm