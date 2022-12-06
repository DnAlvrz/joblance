import Moment from 'react-moment'
import { useEffect } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'


function Comments({offer, offers, onOfferChange, onOfferSubmit}) {

  return (
    <>
    <Comment.Group>
    <Header as='h3' dividing>
      Offers
    </Header>
      { offers?.length > 0 ? (
        offers.map(offer=> (<Comment key={offers._id}>
          <Comment.Avatar src='/matt.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>{offer.talent?.firstname} {offer.talent?.lastname}</Comment.Author>
            <Comment.Metadata>
              <Moment interval={3000} fromNow ago>{offer.createdAt}</Moment> ago
            </Comment.Metadata>
            <Comment.Text>{offer.text}</Comment.Text>
            {/* <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions> */}
          </Comment.Content>
        </Comment>))
      ): (
        <Header style={{padding:'20px'}} as='h3' textAlign='center'> No offers yet.</Header>
      )}
      <Form  onSubmit={onOfferSubmit} reply>
        <Form.TextArea placeholder='Enter offer' onChange={onOfferChange} value={offer}/>
        <Button  content='Add Reply' labelPosition='left' icon='edit' primary />
      </Form>
    </Comment.Group>
    </>

  )
}

export default Comments