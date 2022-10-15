import React from 'react'
import { useState } from 'react';
import { Button, Container, Divider, Form } from 'semantic-ui-react'

const ApplicationForm = ({jobId}) => {
  const [message, setMessage] = useState('');

  const onChange = (e) => {
    setMessage(e.target.value);
  }

  const onSubmit = ()=> {
    console.log(message);
    setMessage('')
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
        value={message}
      />
      <Button fluid onClick={onSubmit} disabled={Boolean(!message)} secondary> Submit </Button>
    </Form>
    </>
  )
}

export default ApplicationForm