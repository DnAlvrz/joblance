import React from 'react'
import { useEffect } from 'react';
import {Form} from 'semantic-ui-react';
function JobForm({onChange, formData}) {
  const {
    title,
    description,
    budget,
    location,
    duration,
  } = formData;
  

  return (
    <Form>
      <Form.Group widths='equal'>
        <Form.Input 
          fluid 
          label='Name' 
          placeholder='Name' 
          name='title'
          onChange={onChange}
          value={title}
        />
        <Form.Input 
          fluid
          type='number'
          label='Budget' 
          placeholder='Budget'
          name='budget'
          onChange={onChange}
          value={budget}
        />
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Input 
          fluid 
          label='Location'
          placeholder='Location'
          onChange={onChange}
          name='location'
          value={location}
        />
        <Form.Input 
          fluid 
          label='Duration' 
          placeholder='Duration'
          name='duration'
          onChange={onChange}
          value={duration}
        />
      </Form.Group>
      <Form.TextArea 
        label='Description'
        placeholder='Describe your job requirements'
        name='description'
        onChange={onChange}
        value={description}     
      />
    </Form>
  )
}

export default JobForm