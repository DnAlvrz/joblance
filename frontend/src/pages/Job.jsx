import React from 'react'
import { useParams } from 'react-router-dom'
import {Item, Label} from 'semantic-ui-react';
import { useSelector, useDispatch} from 'react-redux'
import {useState, useEffect} from 'react'
import { reset} from '../features/auth/authSlice';

function Job() {
  // const {id} = useParams(); 
  const dispatch = useDispatch();

  useEffect (() => {

    return () => {
      dispatch(reset())
    }
  }, [dispatch]);

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

export default Job