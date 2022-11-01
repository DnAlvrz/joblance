import React from 'react'
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react'

function Footer() {
  return (
    <Segment inverted vertical style={{ padding: '2em 0em', marginTop: '100px' }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='About' />
            <List link inverted>
            <List.Item as='a'>About us</List.Item>
              <List.Item as='a'>Collaborate with us</List.Item>
              <List.Item as='a'>How To Access</List.Item>
              <List.Item as='a'>Contact Us</List.Item>
              
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Services' />
            <List link inverted>
              <List.Item as='a'>Help us improve</List.Item>
              <List.Item as='a'>Sitemap</List.Item>
              
              <List.Item as='a'>FAQs</List.Item>
              <List.Item as='a'>Careers</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Others' />
            <List link inverted>
              <List.Item as='a'>Training</List.Item>
              <List.Item as='a'>Services</List.Item>
              <List.Item as='a'>Sponsor/Donations</List.Item>
              <List.Item as='a'>Favorites</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header as='h4' inverted>
              Codevs 	&copy; 2022
            </Header>
            <ul>
              <li>Alvarez, Joseph Adonis B.</li>
              <li>Asmad, Benedict Mahatma Z.</li>
              <li>Aculbe, Rachel Q.</li>
              <li>Kuan, Kenneth R.</li>
              <li>Ft. Amparado, Archie Arthur M.</li>
            </ul>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
  )
}

export default Footer