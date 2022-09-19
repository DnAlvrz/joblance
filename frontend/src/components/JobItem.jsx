import React from 'react'
import {Item, Label} from 'semantic-ui-react';
function JobItem() {
  return (
    <Item>
    <Item.Image src='/square-image.png' />
    
    <Item.Content>
      <Item.Header as='a'>Sample job</Item.Header>
      <Item.Meta>
        <span className='cinema'>Test Address</span>
      </Item.Meta>
      <Item.Description>asdasdas</Item.Description>
      <Item.Extra>
        <Label>Construction</Label>
        <Label icon='globe' content='Mason' />
      </Item.Extra>
    </Item.Content>
  </Item>
  )
}

export default JobItem