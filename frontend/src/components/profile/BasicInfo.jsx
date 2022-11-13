import { Container, Divider, Header, List, Rating, Image } from 'semantic-ui-react'

function BasicInfo({firstname, lastname}) {
  return (
    <>
      <Image style={{margin:'auto'}} src='/square-image.png'  circular />
      <Header as='h2' textAlign='center' color='orange'>{firstname} {lastname}</Header>
      <Divider />
      <Container  textAlign='center'>
        <Header as='h3' textAlign='center' color='yellow'> Rating</Header>
        <Header as='span' textAlign='center' color='blue'> 3.5</Header>
        <Rating size='tiny' maxRating={5} defaultRating={3} icon='star' disabled/>
      </Container>
      <Container style={{padding: '25px 25px'}}>
        <List>
          <List.Item icon='users' content='Painters Club' />
          <List.Item icon='marker' content='Gov. Camins, Canelar' />
          <List.Item icon='mail' content={<a href='mailto:jack@semantic-ui.com'>text@example.com</a>}/>
          <List.Item icon='facebook' content={<a href='http://www.facebook.com'>facebook.com</a>}/>
          <List.Item icon='phone' content={<a href='http://www.facebook.com'>0987123456</a>}/>
        </List>
      </Container>
    </>
  )
}

export default BasicInfo