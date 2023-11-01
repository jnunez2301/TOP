import { useAuth } from "../context/AuthContext";
import UserForm from "../hooks/userForm"

const MessagesForm = () => {

  const { userData, isAuthenticated } = useAuth();

  const { onMessagesChange, handleMessage } = UserForm();

  return (
    <form
      onSubmit={handleMessage}
      className="msg-form">
      <div>
        <div style={{ 
          display: 'flex',
          flexDirection: 'row',
          gap: '15px',
          alignItems: 'center',
          paddingBottom: '15px',
        }}>
          <div
          style={{ 
            display: 'flex',
            flexDirection: 'row',
            gap: '15px',
            alignItems: 'center',
            paddingBottom: '15px',
            justifyContent: 'space-between'
          }}
          >
            <img src="/profile-pic.jpg" alt="profile pic"
            style={{borderRadius: '100%'}}
            width={'45px'}
            height={'45px'}/>
            {isAuthenticated && 
            <p>
              <strong>
              {userData}
              </strong>
            </p>}
          </div>
          <input
          style={{
            flexGrow: '1'
          }}
          className="submit-input"
          onChange={onMessagesChange}
          type="text" name="title" id="msg-title"
          placeholder="Any interesting title?"
          required />
        </div>
        


          <input type="text"
          className="submit-input"
          placeholder="What are you thinking about?"
          onChange={onMessagesChange}
          name="description" id="description" required />
        
      </div>
      <div
      id="post-btn"
      >
        <button className="btn-submit" type="submit">Send</button>
      </div>
    </form>
  )
}

export default MessagesForm