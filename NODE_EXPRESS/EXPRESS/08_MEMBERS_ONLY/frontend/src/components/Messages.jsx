import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Messages = () => {
  const { isAuthenticated } = useAuth();
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/api/messages/')
    .then(response => {
      setData(response.data);
      })
    .catch(error => console.log(error));
  }, [])
  
 /*  console.log(data); */
  
  return (
    <>
      <ul className='msg-container'>
        {
          data.length > 0  ?
          data.map(d => (
            <li key={d._id} className='msg-info'>
                <div className='profile-msg-pic'>
                  <img 
                  src={d.profilePic ? `${d.profilePic}` : "/profile-pic.jpg" }
                   className='profile-pic' alt={`profile-pic from ${d.username}`} />
                </div>
                <div className='msg-description'>
                  <div>
                  <h2
                  >{d.title}</h2>
                  {
                    isAuthenticated ?
                    <Link to={`/user/${d.username}`}
                  style={{fontSize: '12px'}}
                  >{`@${d.username}`}</Link> :
                  <p style={{marginLeft: '10px'}}>******</p>
                  } 
                  </div>
                  <div className='msg-msg'>
                    <p className='date'>
                    {d.date}
                    </p>
                    <div>
                      <div>
                        <p className='msg'>
                        {d.description}
                        </p>
                      </div>
                      <div className='msg-image-container'>
                      {d.messageImg && 
                      <img 
                      className='msg-image'
                      src={d.messageImg} alt='random-img'/>}
                      </div>
                    </div>
                  </div>
                </div>
              
            </li>
          ))
          : 
          <Loading />
       }
      </ul>
    </>
  )
}

export default Messages