// import { FaSignInAlt, FaUser, FaSignOutAlt} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom' //useNavigate
import {useDispatch, useSelector} from 'react-redux';
import {logout, reset} from '../features/auth/authSlice'
import { Button, Menu, Container } from 'semantic-ui-react'


function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth);
  
  const onLogout = () => {
    
    dispatch(logout());
    dispatch(reset());
    navigate('/login')
    
  };
  return (
    <>
    <Menu secondary small>
      <Container>
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
            // active={activeItem === 'messages'}
            // onClick={this.handleItemClick}
          />
        </Link>
        <Link to='/dashboard'>
          <Menu.Item
            name='contact'
            // active={activeItem === 'friends'}
            // onClick={this.handleItemClick}
          />
        </Link>
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
              <Link to='/'>
                <Menu.Item>
                <Button onClick={onLogout}>Logout</Button>
                </Menu.Item>
              </Link>
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