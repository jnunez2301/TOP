import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import UserForm from '../hooks/UserForm';


const Messages = () => {
  const { isAuthenticated } = useAuth();
  const [data, setData] = useState([]);
  const { limit, addMore, isLoading, setIsLoading } = UserForm();  
  const msgScrollRef = useRef(null);
  
  useEffect(() => {
      
      if (data.length !== limit) {
        setIsLoading(true);
        axios
          .get(`/api/messages/${limit}`)
          .then((response) => {
            setData(response.data);
            setIsLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, data.length]);

  
  
  return (
    <ul ref={msgScrollRef} className='msg-ul'>
         
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
       <ul className='msg-container'>
      <div className='add-more-msg'>
         {isLoading && data.length > 0 ? (
            <p>Loading...</p>
          ) : data.length > 0 ? (
            <button className='btn-login' onClick={addMore}>
              Load More
            </button>
          ) : null}
          
       </div>
      </ul>
    </ul>
  )
}

export default Messages