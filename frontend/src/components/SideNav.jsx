import {useState} from 'react'
import {Menu} from 'semantic-ui-react'
import {useNavigate} from 'react-router-dom'

function SideNav() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('')

  const handleItemClick = (e) => {
    navigate('/jobs')
      setActiveItem(e.target.name)
  }
  return (
    
    <Menu vertical>
        <Menu.Item>
          <Menu.Header>Jobs</Menu.Header>
          <Menu.Menu>

            <Menu.Item
              name='Jobs'
              active={activeItem === 'Jobs'}
              onClick={ handleItemClick}
            />

            <Menu.Item
              name='Post Job'
              active={activeItem === 'Post Job'}
              onClick={ handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>CMS Solutions</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='rails'
              active={activeItem === 'rails'}
              onClick={ handleItemClick}
            />
            <Menu.Item
              name='python'
              active={activeItem === 'python'}
              onClick={ handleItemClick}
            />
            <Menu.Item
              name='php'
              active={activeItem === 'php'}
              onClick={ handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Hosting</Menu.Header>

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