import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UserForm = () => {

  const navigate = useNavigate();


  const [formData, setFormData] = useState([]);
  const [loginData, setLoginData] = useState({});
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [messageData, setMessageData] = useState({});
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleLogin = (event) => {
    event.preventDefault();
    setFormData({ ...formData, loginData });
    const loginURL = `http://localhost:3000/api/messages/users/login`;

    if(loginData.username && loginData.password){
      axios.post(loginURL, loginData)
      .then(response => console.log(response.data))
      .catch(error => console.log(error.response.data))
    }
  }


  const handleRegister = (event) => {
    event.preventDefault();

    const registerURL = `http://localhost:3000/api/messages/users/register`

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
    const trimmedValue = value.replace(/\s/g, '');
    setLoginData({ ...loginData, [name]: trimmedValue });
  }


  const onMessagesChange = (event) => {
    const { name, value } = event.target;
    const trimmedValue = value.replace(/\s/g, '');
    setMessageData({ ...messageData, [name]: trimmedValue });
  }

  const handleMessage = (event) => {
    event.preventDefault();
    setFormData({ ...formData, messageData });
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