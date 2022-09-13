// import { FaSignInAlt, FaUser, FaSignOutAlt} from 'react-icons/fa'
import {NavLink, useNavigate} from 'react-router-dom' //useNavigate
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
    <Menu secondary>
      <Container>
        <NavLink to='/'>
          <Menu.Item
              name='home'
              // active={activeItem === 'home'}
              // onClick={this.handleItemClick}
            />
        </NavLink>
        <NavLink to='/dashboard'>
          <Menu.Item
            name='about us'
            // active={activeItem === 'messages'}
            // onClick={this.handleItemClick}
          />
        </NavLink>
        <NavLink to='/dashboard'>
          <Menu.Item
            name='contact'
            // active={activeItem === 'friends'}
            // onClick={this.handleItemClick}
          />
        </NavLink>
        <Menu.Menu position='right'>
          { !user ? (
            <>
              <Menu.Item>
                <Button.Group>
                  <NavLink to='/register'>
                    <Button positive>Sign up</Button>
                  </NavLink>
                  <Button.Or />
                  <NavLink to='/login'>
                    <Button color='teal'>Log-in</Button>
                  </NavLink>
                </Button.Group>
              </Menu.Item>

              
            </>
          ) : (
            <>
              <NavLink to='/logout'>
                <Menu.Item>
                <Button onClick={onLogout}>Logout</Button>
                </Menu.Item>
              </NavLink>
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