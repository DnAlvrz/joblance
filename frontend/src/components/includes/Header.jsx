 // import { FaSignInAlt, FaUser, FaSignOutAlt} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom' //useNavigate
import {useDispatch, useSelector} from 'react-redux';
import {logout, reset} from '../../features/auth/authSlice'
import { Button, Menu, Container, Icon, Dropdown } from 'semantic-ui-react'

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth);

  const trigger = (
    <span>
      <Icon name='user' /> Hello, {user?.firstname}
    </span>
  )

  const options = [
    {
      key: 'user',
      text: (
        <span>
          Signed in as <strong>{user?.firstname} {user?.lastname} </strong>
        </span>
      ),
      disabled: true,
    },
    { key: 'profile', text: 'Your Profile', onClick: e=>{navigate(`/user/${user.id}`)} },
    { key: 'stars', text: 'Your Stars' },
    { key: 'explore', text: 'Explore' },
    { key: 'integrations', text: 'Integrations' },
    { key: 'help', text: 'Help' },
    { key: 'settings', text: 'Settings' },
    { key: 'sign-out', text: 'Sign Out', onClick: e=>{onLogout()}},
  ]

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/login')
  };

  return (
    <>
    <Menu secondary small style={{maxWidth:'100%'}}>
      <Container>
      { user? (
        <>
       
          <Dropdown text='Jobs' pointing className='link item'>
            <Dropdown.Menu>
              <Dropdown.Header> Jobs</Dropdown.Header>
              <Link to='/jobs'><Dropdown.Item>Jobs</Dropdown.Item> </Link>
              <Dropdown.Divider />
              <Dropdown.Header>My Jobs</Dropdown.Header>
              <Link to='/user/jobs'> <Dropdown.Item>My Jobs </Dropdown.Item></Link>
              <Link to='/jobs/post'><Dropdown.Item> Post a job </Dropdown.Item></Link>
            </Dropdown.Menu>
          </Dropdown>

        <Link to='/dashboard'>
          <Menu.Item
            name='dashboard'
          />
        </Link>
        </>
        ) : (
      <>
        <Link to='/'>
          <Menu.Item
              name='home'
              // active={activeItem === 'home'}
              // onClick={this.handleItemClick}
            />
        </Link>
        <Link to='/dashboard'>
          <Menu.Item
            name='about us'
          />
        </Link>
        <Link to='/dashboard'>
          <Menu.Item
            name='contact'
          />
        </Link>
      </>
      )
      }
        <Menu.Menu position='right'>
          { !user ? (
            <>
              <Menu.Item>
                <Button.Group>
                  <Link to='/register'>
                    <Button positive>Sign up</Button>
                  </Link>
                  <Button.Or />
                  <Link to='/login'>
                    <Button color='teal'>Log-in</Button>
                  </Link>
                </Button.Group>
              </Menu.Item>
            </>
          ) : (
            <>
              <Dropdown style={{padding:'10px'}} trigger={trigger} options={options} />
            </>
          )
          }
        </Menu.Menu>
      </Container>
    </Menu>
    </>
  )
}

export default Header