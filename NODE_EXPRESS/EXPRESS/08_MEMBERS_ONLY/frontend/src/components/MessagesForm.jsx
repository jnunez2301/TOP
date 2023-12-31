import { useRef } from "react";
import { useAuth } from "../context/AuthContext";
import UserForm from "../hooks/userForm"




const MessagesForm = () => {

  const { userInfo, convertToBase64 } = useAuth();
  const postImgRef =  useRef();
  const { onMessagesChange, handleMessage, messageData, setMessageData } = UserForm();

  /* console.log(userInfo.profilePic); */
  
 

  const handleFileUpload = async (e) =>{
      const file = e.target.files[0];
      const base64 = await convertToBase64(file);
      if(file.size > 250_000){
        alert('File is too big MAX: 250KB, try to compress it or choose another file');
      }else{
        setMessageData({...messageData, messageImg: base64})
      }
  }
 
  const handleRemoveImg = () =>{
      setMessageData({...messageData, messageImg: ''})
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
            <img
             src={ userInfo.profilePic ? `${userInfo.profilePic}` : "/profile-pic.jpg"} alt="profile pic"
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
          { 
          messageData.messageImg.length > 0 && 
          <div className="upload-container">
           <div>
            <img className="upload-img" src={messageData.messageImg} alt="" />
            <button className="remove-upload-img" onClick={handleRemoveImg}>X</button>
            
           </div>
          </div> }
          
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
          accept="image/jpeg, image/png"
          id="postImgInput" />
        </label>
        <p
        className="letter-count"
        >{messageData.description.length} / Letters</p>
        <button className="btn-submit" type="submit">POST</button>
      </div>
    </form>
  )
}



export default MessagesForm