import MessagesData from '../helpers/MessagesData';

const Messages = () => {
  const data = MessagesData();

  

  return (
    <>
      <h1 id='title'>Members Only Club</h1>
      <ul className='msg-container'>
        {
          data.map(d => (
            <li key={d.id} className='msg-info'>
              
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
                  >{d.Date}</p>
                </div>
              
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default Messages