import React from 'react'
import { Button, Dropdown } from 'semantic-ui-react'

function ContactButtons({user, id, options}) {
  return (
    <>
    { user.id !== id  ? <>
      <Button.Group floated='right'>
        <Button  size='tiny' basic color='green' icon='mail' content='Message' />
        <Dropdown
          text='Invite'
          icon='plus'
          labeled
          button basic
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
        </> : <></>
      }
    </>
  )
}

export default ContactButtons