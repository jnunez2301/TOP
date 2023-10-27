import MessagesData from '../helpers/MessagesData';

const Messages = () => {
  const data = MessagesData();

  

  return (
    <>
      <h2>Messages</h2>
      <ul className='msg-container'>
        {
          data.map(d => (
            <li key={d.id} className='msg-info'>
              
                <div>
                  <p>{d.title}</p>
                  <p>{d.description}</p>
                </div>
                <div>
                  <p>{d.username}</p>
                  <p>{d.Date}</p>
                </div>
              
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default Messages