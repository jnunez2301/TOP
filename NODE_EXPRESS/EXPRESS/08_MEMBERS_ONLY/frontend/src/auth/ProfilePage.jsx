
import axios from 'axios';
import  { useEffect, useRef, useState } from 'react';
import {  useParams } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import Loading from '../components/Loading';
import UserForm from '../hooks/UserForm';

const ProfilePage = () => {

    const { username } = useParams();
    const { newProfilePic, setNewProfilePic, updateProfilePic } = UserForm();
    const imgRef =  useRef();
    const { userData, convertToBase64 } = useAuth();

    const [userInfo, setUserInfo] = useState([]);
    const [allMsg, setAllMsg] = useState([]);
    

    const userURL = `/api/messages/users/${username}`;

    const msgURL = `/api/messages/msg/${username}`

    useEffect(() => {
        axios.get(userURL)
        .then(response => setUserInfo([response.data]))
        .catch(error => console.log(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newProfilePic])

    useEffect(() => {
      axios.get(msgURL)
      .then(response => setAllMsg(...allMsg, response.data))
      .catch(error => console.log(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleFileUpload = async (e) =>{
      const file = e.target.files[0];
      const base64 = await convertToBase64(file);
      setNewProfilePic({profilePic: base64})
      if(file.size > 250_000){
        alert('File is too big MAX: 250KB, try to compress it or choose another file');
      }else{
        /* setMessageData({...messageData, messageImg: base64}) */
        /* ADD PUT TO THE BACKEND */
        if(window.confirm('Do you want to update your profile pic?' )){
          /* PUT From backend */
         
          
          if(userData === username){
           
            updateProfilePic(userData, newProfilePic)
          }
          
        }else{
          alert('Operation cancelled');
        }
      }
      
  }
  

  return (
    <div className='profile-section'>
    
    <section
    style={{
      position: 'relative'
    }}
     className='profile'>
     
        <div className='profile-background'>
          {/* background */}
        </div>
        <label htmlFor='user-pic' className='profile-user-pic'>
          <img 
          className={`
          profile-pic
          ${userData === username ?  'sameUser' : ''}
          `}
          src={ userInfo.length > 0  ? `${userInfo[0].profilePic}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCxdtUUjdG_2KIXy4mJiue7Jgl7n_nO94Cdg&usqp=CAU"} alt="demo-img" />
          </label>
          {
            userData === username ?
             <input 
             ref={imgRef}
             type="file"
             id='user-pic'
             name='user-pic'
             onChange={(e) =>handleFileUpload(e)}
             accept="image/jpeg, image/png" />
             : ''
          }
        
     
      
    </section>
    <section
    style={{width: '100%'}}
    >
    <article
      style={{
        display: 'flex',
        padding: '1rem'
      }}
      >
        {
          userInfo && userInfo.map(user => (
            <p key={user._id}>
              <strong>{user.username}</strong>
             <br />
            {`@${user.username}`}</p>            
          ))
        }
      </article>
        <ul className='all-user-msg'>
          {
            allMsg.length > 0 ? allMsg.map(msg => (
              <li key={msg._id}>
                <h2>{msg.title}</h2>
                <div>
                  <p>{msg.description}</p>
                  {
                    msg.messageImg &&
                    <img 
                    className='msg-image'
                    src={`${msg.messageImg}`} alt={`image from ${msg.username}`} />
                  }
                </div>
              </li>
              
            ))
            :
              <Loading />
          }
        </ul>
    </section>
    </div>
  )
}

export default ProfilePage