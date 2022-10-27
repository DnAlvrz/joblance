import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Index() {
  const navigate = useNavigate();
  const {user} = useSelector((state)=> state.auth)
  useEffect(()=> {
    if(user){
      navigate('/dashboard')
    }
  }, [navigate, user])

  return (
    <div>Index</div>
  )
}

export default Index





















