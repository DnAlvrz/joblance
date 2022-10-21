import React from 'react'
import "./messenger.css"
import Conversation from '../../components/conversations/Conversation'
import Message from '../../components/message/Message'
import Online from '../../components/online/Online'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import {getConversations} from '../../features/chat/chatSlice';
import {toast} from 'react-toastify';
import {Dimmer, Loader}from 'semantic-ui-react';

function Messenger() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user} = useSelector((state)=> state.auth);
  const {conversations, isLoading, isError, message} = useSelector((state)=> state.chat)
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('')

  useEffect(()=> {
    if(!user){
      navigate('/login')
    }
    if(isError){
      toast.error(message)
    }
    dispatch(getConversations(user.id));
  }, [user, navigate, dispatch, isError, messages, message]);


  const handleSubmit = async (e) => {
    e.preventDefault();

  }
  if(isLoading){
    return (
      <>
      <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
      </Dimmer>
      </>
    )
  }

  return (
    <div className='messenger'>
      <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder='Search conversation' className='chatMenuInput' />
            {conversations.map(conversation =>
              <div onClick={()=> {
                setCurrentChat(conversation);
                setMessages(conversation.messages);
                console.log(messages)
              }}>
                <Conversation conversation={conversation}/>
              </div>
            )}

          </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          {
            currentChat ?
            <>
            <div className="chatBoxTop">
              { messages.length > 0 ?
                messages.map((msg) => <Message msg={msg} own={msg.sender === user.id}/>)
                : <span> No messages yet. Message to start a conversation</span>
              }

            </div>
            <div className="chatBoxBottom">
                <textarea
                  className='messageInput'
                  value={newMessage}
                  onChange={(e)=>{setNewMessage(e.target.value)}}
                  placeholder='Aa'></textarea>
                <button onClick={handleSubmit} className='messageSubmitBtn'>Send</button>
            </div>
            </> :
            <span className='noConvoText'> Open a Conversation to view messages</span>
            }
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