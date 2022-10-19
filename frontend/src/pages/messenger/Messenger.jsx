import React from 'react'
import "./messenger.css"
import Conversation from '../../components/conversations/Conversation'
import Message from '../../components/message/Message'
import Online from '../../components/online/Online'
function Messenger() {
  return (
    <div className='messenger'>
      <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder='Search conversation' className='chatMenuInput' />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />

          </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
            <div className="chatBoxTop">
                <Message />
                <Message own={true} />
                <Message />
                <Message own={true}/>
                <Message />
                <Message own={true}/>
                <Message />
                <Message own={true}/>
                <Message />
                <Message own={true}/>
                <Message />
                <Message own={true}/>
                <Message />
                <Message own={true}/>
                <Message />
                <Message own={true}/>
                <Message />
                <Message own={true}/>
            </div>
            <div className="chatBoxBottom">
                <textarea className='messageInput' placeholder='Aa'></textarea>
                <button className='messageSubmitBtn'>Send</button>
            </div>
        </div>
      </div>
      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          <Online />
        </div>
      </div>
    </div>
  )
}

export default Messenger