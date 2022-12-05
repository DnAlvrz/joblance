import React from 'react'
import { Header, Image, Message } from 'semantic-ui-react'

function ClientHelp() {
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
    <Message.Header>Enter job order details</Message.Header>
      <p>
        Fill in the job order details, afterwards select the location, then upload the photos.
      </p>
      <Image fluid src='square-image.png' />
    </Message>
    <Header>Step 3</Header>
    <Message>
    <Message.Header>Wait for verification and applications</Message.Header>
      <p>
        The admin will first verify the legitimacy if the job order then Workers can apply for the job on the jobs tab.
      </p>
      <Image fluid src='square-image.png' />
    </Message>
    <Header>Step 4</Header>
    <Message>
    <Message.Header>Approve the application of the worker</Message.Header>
      <p>
        Choose your preferred worker.
      </p>
      <Image fluid src='square-image.png' />
    </Message>
    <Header>Step 5</Header>
    <Message>
    <Message.Header>Update contract status</Message.Header>
      <p>
        You can update the status of the contract once its finished.
      </p>
      <Image fluid src='square-image.png' />
    </Message>
    <Header>Step 1</Header>
    <Message>
    <Message.Header>Rate the user</Message.Header>
      <p>
        Rate the user based on their perfomance.
      </p>
      <Image fluid src='square-image.png' />
    </Message>
    </>
  )
}

export default ClientHelp