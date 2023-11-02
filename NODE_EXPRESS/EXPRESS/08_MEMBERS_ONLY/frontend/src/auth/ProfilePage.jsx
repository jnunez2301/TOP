
import axios from 'axios';
import  { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';

const ProfilePage = () => {

    const { username } = useParams();
    const imgRef =  useRef();
    const { userData } = useAuth();

    const [userInfo, setUserInfo] = useState([]);
    const [allMsg, setAllMsg] = useState([]);

    const userURL = `/api/messages/users/${username}`;

    const msgURL = `/api/messages/msg/${username}`

    useEffect(() => {
        axios.get(userURL)
        .then(response => setUserInfo([...userInfo, response.data]))
        .catch(error => console.log(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
      axios.get(msgURL)
      .then(response => setAllMsg(...allMsg, response.data))
      .catch(error => console.log(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onImgChange = (e) =>{
      console.log(e);
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCxdtUUjdG_2KIXy4mJiue7Jgl7n_nO94Cdg&usqp=CAU" alt="demo-img" />
          </label>
          {
            userData === username ?
             <input 
             ref={imgRef}
             type="file"
             id='user-pic'
             name='user-pic'
             onChange={onImgChange}
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
            allMsg && allMsg.map(msg => (
              <li key={msg._id}>
                <h2>{msg.title}</h2>
                <p>{msg.description}</p>
              </li>
            ))
          }
        </ul>
    </section>
    </div>
  )
}

export default ProfilePage