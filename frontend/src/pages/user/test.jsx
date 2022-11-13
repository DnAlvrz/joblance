import React from 'react'
import { Button, Container, Divider, Dropdown, Form, Grid, Header, Segment } from 'semantic-ui-react'

function test() {
  const skills = [
    { key: 'angular', text: 'Angular', value: 'angular' },
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
    { key: 'html', text: 'HTML', value: 'html' },
    { key: 'ia', text: 'Information Architecture', value: 'ia' },
    { key: 'javascript', text: 'Javascript', value: 'javascript' },
    { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
    { key: 'meteor', text: 'Meteor', value: 'meteor' },
    { key: 'node', text: 'NodeJS', value: 'node' },
    { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
    { key: 'python', text: 'Python', value: 'python' },
    { key: 'rails', text: 'Rails', value: 'rails' },
    { key: 'react', text: 'React', value: 'react' },
    { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
    { key: 'ruby', text: 'Ruby', value: 'ruby' },
    { key: 'ui', text: 'UI Design', value: 'ui' },
    { key: 'ux', text: 'User Experience', value: 'ux' },
  ];

  return (
    <>
      <Segment style={{minHeight:'500px'}}>
        <>
        <Container style={{padding:'100px'}} textAlign='center'>
          <Header  >No information yet.</Header>
          <span className='link' >Activate profile</span>
        </Container>
        </>
        <>
        <Header textAlign='center'> PROFILE FORM</Header>
        <Form style={{margin:'auto'}}>
          <Form.TextArea label='About' placeholder='Tell us more about you...' />
          <Divider/>
          <Header>Skills</Header>
          <Dropdown  placeholder='Skills' fluid multiple selection options={skills} />
          <Divider/>
          <Header>Education</Header>
          <Grid stackable>
            <Grid.Row columns={3}>
              <Grid.Column >
                <Segment>
                  <Form.Input label='Elementary' type='text' />
                  <Form.Group widths='equal'>
                    <Form.Input width={4} label='From' type='text' />
                    <Form.Input width={4} label='Graduated' type='text' />
                  </Form.Group>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                <Form.Input label='Highschool' type='text' />
                <Form.Group widths='equal'>
                  <Form.Input width={4} label='From' type='text' />
                  <Form.Input width={4} label='Graduated' type='text' />
                </Form.Group>
                </Segment>
              </Grid.Column>

              <Grid.Column >
                <Segment>
                  <Form.Input label='College' type='text' />
                  <Form.Group widths='equal'>
                    <Form.Input width={4} label='From' type='text' />
                    <Form.Input width={4} label='Graduated' type='text' />
                  </Form.Group>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider/>
          <Button fluid type='submit'>Submit</Button>
        </Form>
        </>
      </Segment>
    </>
  )
}

export default test