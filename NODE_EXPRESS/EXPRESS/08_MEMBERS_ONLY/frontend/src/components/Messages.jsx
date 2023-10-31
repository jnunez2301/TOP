import { useEffect, useRef } from 'react';
import MessagesData from '../helpers/MessagesData';
import { useAuth } from '../context/AuthContext';

const Messages = () => {
  const { data } = MessagesData();
  const messageContainerRef = useRef(null);
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    // Ensure the container and its scrollTop property exist before using it
    if (messageContainerRef.current) {
      const container = messageContainerRef.current;
      // Check if the user has manually scrolled to the top
      const isAtTop = container.scrollTop === 0;
      if (isAtTop) {
        container.scrollTop = container.scrollHeight;
      }
    }
  }, [data]);
  

  return (
    <>
      <h1 id='title'>Members Only Club</h1>
      <ul className='msg-container' ref={messageContainerRef}>
        {
          data &&
          data.map(d => (
            <li key={d._id} className='msg-info'>
              
                <div className='msg-description'>
                  <p
                  >{d.title}</p>
                  <p
                  style={{fontSize: '12px'}}
                  >{d.description}</p>
                </div>
                <div className='msg-username'>
                  <p
                  style={{fontSize: '12px'}}
                  >{ isAuthenticated ? d.username : '******'}</p>
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