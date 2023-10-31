import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import MessagesData from '../helpers/MessagesData';


const UserForm = () => {

  const navigate = useNavigate();
  const { checkAuthentication, userData } = useAuth();
  const { fetchData } = MessagesData();
  
  const [formData, setFormData] = useState([]);
  const [loginData, setLoginData] = useState({});
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [messageData, setMessageData] = useState({username: userData, title: '', description: ''});
  const [passwordMatch, setPasswordMatch] = useState(true);

  
  const handleLogin = (event) => {
    event.preventDefault();
    setFormData({ ...formData, loginData });
    const loginURL = `/api/messages/users/login`;
    

    if(loginData.username && loginData.password){
      axios.post(loginURL, loginData, { withCredentials: true })
      .then(response => {
        checkAuthentication();
        
        if(response.status === 200){
          navigate('/')
        }
      })
      .catch(error => {
        console.log(error.response.data)
        alert('Incorrect username or password')
      })
      
    }
    
  }


  const handleRegister = (event) => {
    event.preventDefault();

    const registerURL = `/api/messages/users/register`

    const { password, confirmPassword } = registerData;
    if (password === confirmPassword) {
      setFormData({ ...formData, registerData });
      setPasswordMatch(true)


      axios.post(registerURL, registerData)
        .then(response => {
          navigate('/success');
          console.log(response.data);
        })
        .catch(error => {
          navigate('/error');
          console.log(error);
        });
      //This should redirect to login
    } else {
      // Display an error message
      setPasswordMatch(!passwordMatch)
    }

  }

  const onRegisterChange = (event) => {
    const { name, value } = event.target;
    const trimmedValue = value.replace(/\s/g, '');
    setRegisterData({ ...registerData, [name]: trimmedValue });

  }

  const onLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value.trim() });
  }


  const onMessagesChange = (event) => {
    const { name, value } = event.target;
    setMessageData({ ...messageData, [name]: value.trim() });
  }

  const handleMessage = (event) => {
    event.preventDefault();

    const messagesURL = '/api/messages/';

    setMessageData({ ...messageData, 
      username: userData,
      title: messageData.title,
      description: messageData.description
     }); 
    
    axios.post(messagesURL, messageData, {withCredentials: true})
      // eslint-disable-next-line no-unused-vars
      .then(response => {
       /*  console.log(response.data) */
        fetchData();
        event.target.reset();
      })
      .catch(error => console.error(error))
    

  }

 

  return {
    onLoginChange,
    handleLogin,
    handleRegister,
    onRegisterChange,
    onMessagesChange,
    handleMessage,
    passwordMatch,
    
  };

}

export default UserForm