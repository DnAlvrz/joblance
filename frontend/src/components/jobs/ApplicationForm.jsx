import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, Container, Divider, Form } from 'semantic-ui-react'
import { reset, sendJobApplication } from '../../features/jobs/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';


const ApplicationForm = ({jobId}) => {
  const dispatch = useDispatch();

  const {isSuccess, isError, message, isLoading} = useSelector((state) => state.jobs)
  const [applicationMessage, setapplicationMessage] = useState('');

  const onChange = (e) => {
    setapplicationMessage(e.target.value);
  }

  const onSubmit = ()=> {
    dispatch(sendJobApplication({jobId, applicationMessage}));
    setapplicationMessage('')
  }
  useEffect(()=> {
    if(isSuccess){
      toast.success('Application sent.')
    }
    if(isError){
      toast.error(message)
    }
  }, [isError, message, dispatch])
  
  return (
    <>
    <Container textAlign='center'>
      <h4 > Apply for job </h4>
    </Container>
    <Divider />
    <Form>
      <Form.TextArea
        label="Make your pitch"
        placeholder='Tell them why, you are the best candidate for this job.'
        name='description'
        onChange={onChange}
        value={applicationMessage}
      />
      <Button loading={isLoading} fluid onClick={onSubmit} disabled={Boolean(!applicationMessage)} secondary> Submit </Button>
    </Form>
    </>
  )
}

export default ApplicationForm