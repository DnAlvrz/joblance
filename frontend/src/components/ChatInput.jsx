import React from 'react'

function ChatInput({handleSubmit, newMessage, setNewMessage}) {
  return (
    <>
    <textarea
      className='messageInput'
      value={newMessage}
      onChange={(e)=>{setNewMessage(e.target.value)}}
      placeholder='Aa'></textarea>
    <button onClick={handleSubmit} disabled={newMessage.length===0} className='messageSubmitBtn'>Send</button>
    </>
  )
}

export default ChatInput