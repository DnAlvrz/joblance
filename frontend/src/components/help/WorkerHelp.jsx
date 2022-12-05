import React from 'react'
import { Header, Image, Message } from 'semantic-ui-react'

function WorkerHelp() {
  return (
    <>
    <Header>Step 1</Header>
    <Message>
    <Message.Header>Register on the website</Message.Header>
      <p>
        We urge users to fill every bit of information needed on the form.
      </p>
      <Image fluid src='square-image.png' />
    </Message>
    <Header>Step 2</Header>
    <Message>
    <Message.Header>Update your profile</Message.Header>
      <p>
        You have better chances of getting your application approved once you fill in your profile details. You also need to inout your skills to get job matches.
      </p>
      <Image fluid src='square-image.png' />
    </Message>
    <Header>Step 3</Header>
    <Message>
    <Message.Header>Choose a job</Message.Header>
      <p>
        You can view the jobs in your area by going to the jobs tab.
      </p>
      <Image fluid src='square-image.png' />
    </Message>
    <Header>Step 4</Header>
    <Message>
    <Message.Header>Apply to a job</Message.Header>
      <p>
        Send your pitch and then wait for the client to approve your application.
      </p>
      <Image fluid src='square-image.png' />
    </Message>
    <Header>Step 5</Header>
    <Message>
    <Message.Header>Wait for approval</Message.Header>
      <p>
        You can message the client and arrange the time and date for the job order.
      </p>
      <Image fluid src='square-image.png' />
    </Message>
    <Header>Step 6</Header>
    <Message>
    <Message.Header>Repeat</Message.Header>
      <p>
      You can apply again to other jobs as soon as you finish a contract or you as many jobs as you can handle.
      </p>
      <Image fluid src='square-image.png' />
    </Message>
    </>
  )
}

export default WorkerHelp