import UserForm from "../hooks/userForm"

const MessagesForm = () => {

  const { onMessagesChange, handleMessage } = UserForm();

  return (
    <form
    onSubmit={ handleMessage }
     className="msg-form">
      <label htmlFor="msg-title">Title</label>
      <input
      onChange={ onMessagesChange }
       type="text" name="msgTitle" id="msg-title" required/>

      <label htmlFor="description">Message</label>
      <input type="text" 
      onChange={ onMessagesChange }
      name="description" id="description" required/>
      <button className="btn-submit" type="submit">Send</button>
    </form>
  )
}

export default MessagesForm