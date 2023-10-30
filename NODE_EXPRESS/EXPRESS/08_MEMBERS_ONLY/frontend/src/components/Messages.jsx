import { useEffect, useRef } from 'react';
import MessagesData from '../helpers/MessagesData';

const Messages = () => {
  const { data } = MessagesData();
  const msgContainerRef = useRef(null);

  
  useEffect(() => {
    if(msgContainerRef.current){
      msgContainerRef.current.scrollTop = msgContainerRef.current.scrollHeight;
    }
  },[data])
  

  return (
    <>
      <h1 id='title'>Members Only Club</h1>
      <ul className='msg-container' ref={msgContainerRef}>
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
                  >{d.username}</p>
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