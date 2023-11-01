import { useEffect, useRef } from 'react';
import MessagesData from '../helpers/MessagesData';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Messages = () => {
  const { data } = MessagesData();
 
  const { isAuthenticated } = useAuth();
  
  
 
  

  return (
    <>
      <ul className='msg-container'>
        {
          data &&
          data.map(d => (
            <li key={d._id} className='msg-info'>
              
                <div className='msg-description'>
                  <div>
                  <h2
                  >{d.title}</h2>
                  <Link to={`/user/${d.username}`}
                  style={{fontSize: '12px'}}
                  >{`@${d.username}`}</Link>  
                  </div>
                  <div>
                    <p className='msg'>{d.description}</p>
                  </div>
                </div>
                <div className='msg-username'>
                  <p
                  style={{fontSize: '10px'}}
                  >{d.date}</p>
                </div>
              
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default Messages