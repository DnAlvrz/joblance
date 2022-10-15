import React from 'react'
import { List } from 'semantic-ui-react'

function ListItem({job}) {
  return (
    <>
    <List.Item key={job._id}>
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