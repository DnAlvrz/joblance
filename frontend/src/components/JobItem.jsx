import React from 'react'
import { Link } from 'react-router-dom';
import {Item, Label, Button, Icon} from 'semantic-ui-react';
function JobItem({job}) {
  return (
    <Item>
    <Item.Image src='/square-image.png' />
    <Item.Content>
      <Item.Header>{job.title}</Item.Header>
      <Item.Meta>
        <span className='price'>{job.budget}</span>
        <span className='stay'>{job.duration}</span>
        <p className='cinema'>{job.location}</p>
      </Item.Meta>
      <Item.Description>{job.description}</Item.Description>
      <Item.Extra>
        <Label>Construction</Label>
        <Label icon='globe' content='Mason' />
        <Link to={`/jobs/${job._id}`}>
          <Button primary floated='right'>
              View Details
              <Icon name='right chevron' />
          </Button>
        </Link>
      </Item.Extra>
    </Item.Content>
  </Item>
  )
}

export default JobItem