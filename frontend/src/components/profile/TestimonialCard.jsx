import { Card, Rating } from 'semantic-ui-react'

function TestimonialCard() {
  return (
    <>
    <Card>
      <Card.Content>
        <Card.Header>Matthew Harris</Card.Header>
        <Card.Meta>Local Resident</Card.Meta>
        <Card.Description>
          <Rating size='tiny' maxRating={5} defaultRating={5} icon='star' disabled/>
          <p>
            Great work! He finished it in just a few hours! 5 stars bro!
          </p>
        </Card.Description>
      </Card.Content>
    </Card>
    </>
  )
}

export default TestimonialCard