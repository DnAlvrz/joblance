import {Button, Card, Container, Divider, Dropdown, Grid, Header, Image, Label, List, Rating, Segment, Table} from 'semantic-ui-react'

function Profile() {
  const options = [
  { key: 1, text: 'job 1', value: 1 },
  { key: 2, text: 'job 2', value: 2 },
  { key: 3, text: 'job 3', value: 3 },
  ]


  return (
    <>
      <Grid stackable>
        <Grid.Row >
          <Grid.Column width={4}>
            <Segment color='teal'>
              <Image style={{margin:'auto'}} src='/square-image.png'  circular />
              <Header as='h2' textAlign='center' color='orange'>Juan Dela Cruz</Header>
              <Container  textAlign='center'>
                <Label color='red' horizontal>
                  Mason
                </Label>
                <Label color='blue' horizontal>
                  Carpenter
                </Label>
                <Label color='yellow' horizontal>
                  Painter
                </Label>
              </Container>

              <Divider />
              <Container  textAlign='center'>
              <Header as='h3' textAlign='center' color='yellow'> Rating</Header>
                <Header as='span' textAlign='center' color='blue'> 3.5</Header>
                <Rating size='tiny' maxRating={5} defaultRating={3} icon='star' disabled/>
              </Container>
              <Container style={{padding: '25px 40px'}}>
              <List>
                <List.Item icon='users' content='Painters Club' />
                <List.Item icon='marker' content='Gov. Camins, Canelar' />
                <List.Item
                  icon='mail'
                  content={<a href='mailto:jack@semantic-ui.com'>text@example.com</a>}
                />
                <List.Item
                  icon='facebook'
                  content={<a href='http://www.facebook.com'>facebook.com</a>}
                />
                <List.Item
                  icon='phone'
                  content={<a href='http://www.facebook.com'>0987123456</a>}
                />
              </List>
            </Container>

            <Table definition>
              <Table.Body>
                <Table.Row>
                  <Table.Cell width={2}>Age</Table.Cell>
                  <Table.Cell>25</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Weight</Table.Cell>
                  <Table.Cell>50kg</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>City</Table.Cell>
                  <Table.Cell>Zamboanga City</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>

            </Segment>
          </Grid.Column>
          <Grid.Column width={10}>
            <Segment color='red'>
              <Button.Group floated='right'>
                <Button  size='tiny' basic color='green' icon='mail' content='Message' />
                <Dropdown
                  style={{backgroundColor:'white', border:'1px solid #4B7CC6', color:'#4B7CC6'}}
                  text='Invite'
                  icon='plus'
                  labeled
                  button
                  className='icon'
                >
                  <Dropdown.Menu>
                    <Dropdown.Menu scrolling>
                      {options.map((option) => (
                        <Dropdown.Item key={option.value} {...option} />
                      ))}
                    </Dropdown.Menu>
                  </Dropdown.Menu>
                </Dropdown>

              </Button.Group>
              <Container  style={{padding:'20px', marginTop:'30px'}} textAlign='justified'>
              <Header as='h4' color='green'>
                About Juan
              </Header>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sequi fugit consectetur reiciendis maiores, quae, nihil earum totam excepturi dolore atque at illum impedit? Sunt quae dicta nihil dolore aperiam.</p>
              <Divider />

              <Header as='h4' color='blue'>Education</Header>
              <List>
                <List.Item>
                  <List.Icon name='marker' />
                  <List.Content>
                    <List.Header>Zamboanga Peninsula Polytechnic State University</List.Header>
                    <List.Description>
                     BSIT | 2019 - 2023
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='marker' />
                  <List.Content>
                    <List.Header>Claret School of Zamboanga City</List.Header>
                    <List.Description>
                     Secondary | 2011 - 2015
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='marker' />
                  <List.Content>
                    <List.Header> Claret School of Zamboanga City</List.Header>
                    <List.Description>
                     Elemetary | 2004 - 2011
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List>
              <Divider />
              <Header as='h4' color='yellow'>
                Testimonials
              </Header>
              <Card.Group>
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
                <Card>
                  <Card.Content>
                    <Card.Header>Elliot Baker</Card.Header>
                    <Card.Meta>Local Resident</Card.Meta>
                    <Card.Description>
                      <Rating size='tiny' maxRating={5} defaultRating={5} icon='star' disabled/>
                      <p>
                        Great work! He finished it in just a few hours! 5 stars bro!
                      </p>
                    </Card.Description>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Card.Header>Jake Smith</Card.Header>
                    <Card.Meta>Local Resident</Card.Meta>
                    <Card.Description>
                      <Rating size='tiny' maxRating={5} defaultRating={5} icon='star' disabled/>
                      <p>
                        Great work! He finished it in just a few hours! 5 stars bro!
                      </p>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Card.Group>
              </Container>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}
export default Profile