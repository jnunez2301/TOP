import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import MessagesData from '../helpers/MessagesData';


const UserForm = () => {

  const navigate = useNavigate();
  const { userData, setIsAuthenticated, checkAuthentication } = useAuth();
  const { fetchData } = MessagesData();
  

  const [formData, setFormData] = useState([]);
  const [loginData, setLoginData] = useState({});
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [messageData, setMessageData] = useState({
    username: userData,
     title: '', 
     description: '',
     messageImg: ''
    });
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [ userExist, setUserExist ] = useState(false);
  const [ failedLogin, setFailedLogin ] = useState(false);
  const [ newProfilePic, setNewProfilePic ] = useState({});
  const [ limit, setLimit ] = useState(5);
  const [ isLoading, setIsLoading ] = useState(false);
 

 
  
  const handleLogin = async (event) => {
    event.preventDefault();
    
    setFormData({ ...formData, loginData });
    const loginURL = `/api/messages/users/login`;
  
    if (loginData.username && loginData.password) {
      try {
        // Wait for checkAuthentication to complete
        
          /* await checkAuthentication(); */
          
          // Proceed with the login request
          const response = await axios.post(loginURL, loginData, { withCredentials: true });
          const isLogged = await axios.get('/api/messages/auth/status')
          
          console.log(response);
  
          // Check isAuthenticated again in case it changed
          if (isLogged.status === 200) {
            await checkAuthentication();
            setIsAuthenticated(true);
            navigate('/');
          }
        
      } catch (error) {
        console.log(error.response.data);
       /*  alert('Incorrect username or password'); */
       setFailedLogin(true);
      }
    }
  }
  
  const addMore = () =>{
    setLimit(limit + 5)
    setIsLoading(true)    
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
          setUserExist(true);
          console.log(error.response.data);
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

  
  const handleMessage = async(event) => {
    event.preventDefault();
    await userData;
    const messagesURL = '/api/messages/';
    setMessageData({ ...messageData, 
      username: userData,
      title: messageData.title,
      description: messageData.description,
      messageImg: messageData.messageImg
     }); 
     
    axios.post(messagesURL, messageData, {withCredentials: true})
      // eslint-disable-next-line no-unused-vars
      .then(response => {
        fetchData();
        
        setMessageData({...messageData, messageImg: ''});
        event.target.reset();
      })
      .catch(error => console.error(error))
    
  }

  const updateProfilePic = (username, newData, userInfo) =>{
    const updateURL = `/api/messages/users/profilePic/${username}`
    
    const newInfo = {
      username: userInfo.username,
      password: userInfo.password,
      email: userInfo.email,
      profilePic: newData
    }
    axios.put(updateURL, newInfo, {withCredentials: true})
    .then((response) => {
      // Handle the successful update, if needed
      setNewProfilePic(response.data.profile)
      console.log('Profile picture updated:', response);
    })
    .catch((error) => {
      console.error('Error updating profile picture:', error);
    });
  }

 

 
  return {
    onLoginChange,
    handleLogin,
    handleRegister,
    onRegisterChange,
    onMessagesChange,
    handleMessage,
    passwordMatch,
    messageData,
    setMessageData,
    userExist,
    failedLogin,
    setNewProfilePic,
    newProfilePic,
    updateProfilePic,
    limit,
    setLimit,
    addMore,
    isLoading,
    setIsLoading,
   
  };

}

export default UserForm