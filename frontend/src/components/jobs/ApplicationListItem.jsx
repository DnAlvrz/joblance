import React, { useEffect } from 'react'
import { Button, Header, Image, List } from 'semantic-ui-react'

function ApplicationListItem({application}) {

  
  useEffect(()=>{
    console.log(application)
  }, [application]);

  return (
    <>
    <List.Item>
      <List.Content floated='right'>
        <Button.Group>
          <Button positive>Accept</Button>
          <Button negative>Reject</Button>
        </Button.Group>
      </List.Content>
      <Image avatar src='/images/avatar/small/lena.png' />
      <List.Content>
        <Header as='h4'>
          {application?.talent.firstname} {application?.talent.lastname}
        </Header>
        <p>{application.message}</p>
      </List.Content>
    </List.Item>
    </>
  )
}

export default ApplicationListItem