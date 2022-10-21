import React from 'react'
import './message.css'
import {format} from 'timeago.js';
function Message({msg, own}) {
  return (
    <div className={own ? 'message own' : 'message'}>
      <div className="messageHeader">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg&_gl=1*196en04*_ga*NzM5NDk0MTMxLjE2NjUyMjM3OTc.*_ga_8JE65Q40S6*MTY2NjA2NTM4NS42LjEuMTY2NjA2NTQ2OS4wLjAuMA.."
          alt=""
          className="messageImage"
        />
        <p className="messageTxt">{msg?.text}</p>
      </div>
      <div className="messageFooter">{format(msg.createdAt)}</div>
    </div>
  )
}

export default Message