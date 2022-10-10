import React from 'react'
import { Link } from 'react-router-dom';
import {Item, Grid, Label, Button, Icon} from 'semantic-ui-react';
function JobItem({job}) {
  return (
    <Item >
    <Item.Image  size='tiny' src='/square-image.png' />
    <Item.Content>
    <Link to={`/jobs/${job._id}`}>
      <Item.Header>{job.title}</Item.Header>
    </Link>
      <Item.Meta>

      <span className='price'> ₱ {job.budget} <Label color='green' size='mini' floated='right'>{job.duration}</Label>
</span>
        <p className='cinema'> <Icon  name='location arrow' /> {job.location}</p>
      </Item.Meta>
      <Item.Extra>
        <Label color='blue'>Construction</Label>
        <Label color='red' icon='globe' content='Mason' />

      </Item.Extra>
    </Item.Content>
  </Item>
  )
}

export default JobItem