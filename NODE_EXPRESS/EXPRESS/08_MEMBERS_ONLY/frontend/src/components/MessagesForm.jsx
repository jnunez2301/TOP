import { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import UserForm from "../hooks/userForm"



const MessagesForm = () => {

  const { userData, isAuthenticated } = useAuth();
  const postImgRef =  useRef();
  const { onMessagesChange, handleMessage, messageData, setMessageData } = UserForm();

  

  const handleFileUpload = async (e) =>{
      const file = e.target.files[0];
      const base64 = await convertToBase64(file);
      setMessageData({...messageData, messageImg: base64})
  }
 
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
          className="profile-msg-form"
          >
            <img src="/profile-pic.jpg" alt="profile pic"
            className="profile-pic"/>
            {/* {isAuthenticated && 
            <p>
              <strong>
              {userData}
              </strong>
            </p>} */}
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
        


          <textarea type="text"
          className="submit-input"
          placeholder="What are you thinking about?"
          onChange={onMessagesChange}
          name="description" id="description" required />
        
      </div>
      <div
      className="post-btn"
      >
        <label htmlFor="postImgInput">
          <img 
          
          className="post-img"
          src="/add-photo.svg" alt="add-photo button" />
          <input type="file" name="postImgInput" 
          ref={postImgRef}
          onChange={(e) => handleFileUpload(e)}
          accept=".jpeg, .png, .jpg"
          id="postImgInput" />
        </label>
        <p
        className="letter-count"
        >{messageData.description.length} / Letters</p>
        <button className="btn-submit" type="submit">Send</button>
      </div>
    </form>
  )
}

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) =>{
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () =>{
      resolve(fileReader.result)
    }
    fileReader.onerror = (error) =>{
      reject(error)
    }
  })
}

export default MessagesForm