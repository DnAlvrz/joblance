import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import JobTabs from '../../components/JobTabs'
import {getUserJob} from '../../features/jobs/jobSlice';
import {toast} from 'react-toastify'

function UserJobs() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {jobs, isLoading, isError, message} = useSelector((state)=> state.jobs);

  useEffect(()=> {
    if(isError) {
      toast.error(message);
    }
    dispatch(getUserJob());
    console.log(jobs)
  },[dispatch, navigate])

  return (
    <>
    <JobTabs isLoading={isLoading} jobs={jobs}/>
    </>
  )
}

export default UserJobs