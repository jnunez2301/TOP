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
                <div className='profile-msg-pic'>
                  <img src="/profile-pic.jpg" className='profile-pic' alt={`profile-pic from ${d.username}`} />
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
                      <p className='msg'>
                      {d.description}
                      </p>
                    </div>
                  </div>
                </div>
              
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default Messages