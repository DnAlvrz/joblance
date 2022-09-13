import React from 'react'
import { useParams } from 'react-router-dom'

function Job() {
  const {id} = useParams(); 
  return (
    <div>{id}</div>
  )
}

export default Job