import React from 'react'
import { Button, Icon, List } from 'semantic-ui-react'

function ListItem({job}) {
  return (
    <>
    <List.Item key={job._id} style={{padding:'10px'}}>
      <List.Content floated='right'>
        <Button.Group size='mini'>
          <Button color='teal'>
            <Icon name='edit' />
            Edit
          </Button>
          <Button color='red'>
            <Icon name='trash alternate' />
            Delete
          </Button>
          <Button color='black'>
            <Icon name='eye' />
            View
          </Button>
        </Button.Group>
      </List.Content>

      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>{job.title}</List.Header>
        <List.Description as='a'>{job.createdAt}</List.Description>
      </List.Content>
    </List.Item>
    </>
  )
}

export default ListItem