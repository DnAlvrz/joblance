import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

function Comments() {
  return (
    <>
    <Comment.Group>
    <Header as='h3' dividing>
      Offers
    </Header>
      <Comment>
        <Comment.Avatar src='/matt.jpg' />
        <Comment.Content>
          <Comment.Author as='a'>Mohaiden Manladen</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>I can do it for 6500!</Comment.Text>
          {/* <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions> */}
        </Comment.Content>
      </Comment>
      <Form reply>
        <Form.TextArea />
        <Button content='Add Reply' labelPosition='left' icon='edit' primary />
      </Form>
    </Comment.Group>
    </>

  )
}

export default Comments