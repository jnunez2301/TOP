const MessagesForm = () => {
  return (
    <form className="msg-form">
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" required/>

      <label htmlFor="description">Message</label>
      <input type="text" name="description" id="description" required/>
      <button className="btn-submit" type="submit">Send</button>
    </form>
  )
}

export default MessagesForm