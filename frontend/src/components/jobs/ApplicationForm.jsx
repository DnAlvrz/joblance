import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, Container, Divider, Form } from 'semantic-ui-react'
import {sendJobApplication } from '../../features/application/applicationSlice';
import { useDispatch } from 'react-redux';


const ApplicationForm = ({jobId, user,jobUser}) => {
  const dispatch = useDispatch();

  const [applicationMessage, setapplicationMessage] = useState('');

  const onChange = (e) => {
    setapplicationMessage(e.target.value);
  }

  const onSubmit = ()=> {
    dispatch(sendJobApplication({jobId, applicationMessage}));
    setapplicationMessage('')
  }

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
      {
        jobUser === user.id ? (
        <Button fluid disabled secondary>Locked</Button>
        ) : (
        <Button fluid onClick={onSubmit} disabled={applicationMessage.length === 0 } secondary> Submit </Button>
        )
      }

    </Form>
    </>
  )
}

export default ApplicationForm