import  { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UserForm = () => {

    const navigate = useNavigate();


    const [ formData, setFormData ] = useState([]);
    const [ loginData, setLoginData ] = useState({});
    const [ registerData, setRegisterData ] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    const [ messageData, setMessageData ] = useState({});
    const [ passwordMatch, setPasswordMatch ] = useState(true);

    const handleLogin = (event) =>{
        event.preventDefault();
        setFormData({...formData, loginData});        
    }
   
   
    const handleRegister = (event) => {
      event.preventDefault();
      const { password, confirmPassword } = registerData;
      if (password === confirmPassword) {
        setFormData({...formData, registerData});
        setPasswordMatch(true)
        alert('success')
        navigate('/success');
        
        //This should redirect to login
       } else {
        // Display an error message
        setPasswordMatch(!passwordMatch)
      }
            
    }
    const onRegisterChange =(event) =>{
      const { name, value } = event.target;
      setRegisterData({...registerData, [name] : value}); 
      
    }
   
    
    

    const onLoginChange = (event) =>{
        const { name, value } = event.target;
        setLoginData({...loginData, [name]: value});
    }

    
    const onMessagesChange = (event) =>{
      const { name, value } = event.target;
      setMessageData( {...messageData, [name] : value} )      
    }

    const handleMessage = (event) =>{
      event.preventDefault();
      setFormData({...formData, messageData});
    }
    
  return {
    onLoginChange,
    handleLogin,
    handleRegister,
    onRegisterChange,
    onMessagesChange,
    handleMessage,
    passwordMatch
  };
    
}

export default UserForm