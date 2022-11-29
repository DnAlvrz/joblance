 // import { FaSignInAlt, FaUser, FaSignOutAlt} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom' //useNavigate
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../features/auth/authSlice'
import { Button, Menu, Container, Dropdown, Image } from 'semantic-ui-react'
import { useEffect } from 'react';
import { getUserPhotos } from '../../features/photos/photoSlice';
import { toast } from 'react-toastify';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth);
  const {photos, photoError, photoMessage} = useSelector((state)=>state.photos);

  useEffect(()=> {
    dispatch(getUserPhotos(user.id));

    if(photoError){
      toast.error(photoMessage)
    }

  }, [dispatch, photoError, photoMessage, user.id])


  const trigger = (
    <span>
      <Image avatar src={photos[photos.length-1]}/> Hello, {user?.firstname}
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
    { key: 'profile', as:'a', href: user?.session === 'laborer' ? `/user/${user.id}` : '', text: 'Your Profile', disabled: user?.session === 'client' },
    { key: 'message', text: 'Messages', onClick: e=>{navigate(`/chat`)} },
    { key: 'sign-out', text: 'Sign Out', onClick: e=>{onLogout()}},
  ]

  const onLogout = () => {
    dispatch(logout());
    navigate('/login')
  };

  return (
    <>
    <Menu secondary  style={{maxWidth:'100%'}}>
      <Container>
      { user? (
        <>
          <Link to='/dashboard' style={{padding:'10px'}}>
            <Menu.Item
              name='dashboard'
            />
          </Link>
          <Dropdown text='Jobs' pointing className='link Menu item'>
            <Dropdown.Menu>
              <Dropdown.Header> Jobs</Dropdown.Header>
              <Link to='/jobs'><Dropdown.Item key='joblist'>Jobs</Dropdown.Item> </Link>
              <Dropdown.Divider />
              <Dropdown.Header>My Jobs</Dropdown.Header>
              <Link to='/user/jobs'> <Dropdown.Item key='userjobs'>My Jobs </Dropdown.Item></Link>
              <Link to='/jobs/post'><Dropdown.Item key='postjob'> Post a job </Dropdown.Item></Link>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown text='Contracts' pointing className='link Menu item'>
            <Dropdown.Menu>
              <Dropdown.Header> Contracts</Dropdown.Header>
              <Link to='/user/contracts'><Dropdown.Item key='contracts'>Contracts</Dropdown.Item> </Link>
              <Dropdown.Divider />
              <Dropdown.Header>My Jobs</Dropdown.Header>
              <Link to='/user/jobs'> <Dropdown.Item key='UserContracts'>My Contracts </Dropdown.Item></Link>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown disabled text='Reports' pointing className='link Menu item'>
            <Dropdown.Menu>
              <Dropdown.Header> Contracts</Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Header>My Jobs</Dropdown.Header>
            </Dropdown.Menu>
          </Dropdown>
        </>
        ) : (
      <>
        <Link to='/'>
          <Menu.Item
              name='home'

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