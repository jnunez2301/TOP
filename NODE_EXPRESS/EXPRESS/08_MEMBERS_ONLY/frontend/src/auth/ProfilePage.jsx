
import axios from 'axios';
import  { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const ProfilePage = () => {

    const { username } = useParams();
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState([]);
    const [allMsg, setAllMsg] = useState([]);

    const userURL = `http://localhost:3000/api/messages/users/${username}`;

    const msgURL = `http://localhost:3000/api/messages/msg/${username}`

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

    const backToMenu = () => {
      navigate('/')
    }


  return (
    <div className='profile-section'>
    
    <section
    style={{
      position: 'relative'
    }}
     className='profile'>
      <div>
      <button 
      style={{
        position: 'absolute',
        top: '0',
        right: '0',
        margin: '1rem'
      }}
      onClick={backToMenu} className='btn-login' >Go Back</button>
    </div>
      <article
      style={{
        display: 'flex',

      }}
      >
        {
          userInfo && userInfo.map(user => (
            <p key={user._id}>
              <strong>{user.username}</strong>
             <br />
            {user.email}</p>            
          ))
        }
      </article>
      <figure>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCxdtUUjdG_2KIXy4mJiue7Jgl7n_nO94Cdg&usqp=CAU" alt="demo-img" />
      </figure>
      
    </section>
    <section>
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