import React from 'react'
import './conversation.css'

function Conversation() {
  return (
    <>
      <div className="conversation">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg&_gl=1*196en04*_ga*NzM5NDk0MTMxLjE2NjUyMjM3OTc.*_ga_8JE65Q40S6*MTY2NjA2NTM4NS42LjEuMTY2NjA2NTQ2OS4wLjAuMA.."
          alt="John Doe"
          className='conversationImage'
        />
        <span className="conversationName">John Doe</span>
      </div>
    </>
  )
}

export default Conversation