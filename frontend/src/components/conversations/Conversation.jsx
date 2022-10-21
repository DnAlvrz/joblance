import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import './conversation.css'

function Conversation({conversation}) {
  const {user}  = useSelector((state)=> state.auth);
  const getSender = (member)=> {
    return member._id !== user.id
  }
  const sender = conversation.members.filter(getSender)[0]

  useEffect(()=> {
  }, [user, conversation])
  return (
    <>
      <div className="conversation">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg&_gl=1*196en04*_ga*NzM5NDk0MTMxLjE2NjUyMjM3OTc.*_ga_8JE65Q40S6*MTY2NjA2NTM4NS42LjEuMTY2NjA2NTQ2OS4wLjAuMA.."
          alt="John Doe"
          className='conversationImage'
        />
        <span className="conversationName">{sender.firstname} {sender.lastname}</span>
      </div>
    </>
  )
}

export default Conversation