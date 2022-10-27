import {useState, useEffect} from 'react'
import {Menu} from 'semantic-ui-react'
import {Link, useNavigate} from 'react-router-dom'

function SideNav() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('')

  const handleItemClick = (e) => {

  }
  useEffect(()=> {

  }, [activeItem])
  return (

    <Menu vertical>
        <Menu.Item>
          <Menu.Header>Jobs</Menu.Header>
          <Menu.Menu>
            <Link to= '/jobs'>
            <Menu.Item
              as='span'
              name='Jobs'
              active={activeItem === 'Jobs'}
              onClick={ handleItemClick}
            />
            </Link>
            <Link to= '/jobs/user'>
              <Menu.Item
                as='span'
                name='My Jobs'
                active={activeItem === ' jobs'}
                onClick={ handleItemClick}
              />
            </Link>
            <Link to= '/jobs/post'>
              <Menu.Item
                as='span'
                name='Post Job'
                active={activeItem === 'Post Job'}
                onClick={ handleItemClick}
              />
            </Link>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Talents</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='Search'
              active={activeItem === 'rails'}
              onClick={ handleItemClick}
            />
            <Menu.Item
              name='View'
              active={activeItem === 'python'}
              onClick={ handleItemClick}
            />
            <Menu.Item
              name='Invite'
              active={activeItem === 'php'}
              onClick={ handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Contracts</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='shared'
              active={activeItem === 'shared'}
              onClick={ handleItemClick}
            />
            <Menu.Item
              name='dedicated'
              active={activeItem === 'dedicated'}
              onClick={ handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Support</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='email'
              active={activeItem === 'email'}
              onClick={ handleItemClick}
            >
              E-mail Support
            </Menu.Item>

            <Menu.Item
              name='faq'
              active={activeItem === 'faq'}
              onClick={ handleItemClick}
            >
              FAQs
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
  )
}

export default SideNav