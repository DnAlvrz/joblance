import {toast} from 'react-toastify'
import {Form, Button, Message, Icon,Dimmer, Loader, Grid} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { useNavigate} from 'react-router-dom'
import {register, reset} from '../features/auth/authSlice'


function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password2: '',
    address: '',
    phone:'',
  });

  const [isChecked, setIsChecked] = useState(false)

  const {
    firstname,
    lastname,
    email,
    password,
    password2,
    phone,
    address,
  } = formData;

  const {user, isLoading, isError, isSuccess, message} = useSelector((state)=> state.auth);

  useEffect(()=> {
    
    if(isError){
      toast.error(message);
    }

    if(isSuccess || user){
      navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate,dispatch]);

  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(!isChecked){
      toast.error('Must aggree to terms and conditions')
    }
    if(password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        firstname,
        lastname,
        email,
        password,
        phone,
        address
      }
      dispatch(register(userData))
    }
  }

  return (
    <>
  
    <Dimmer active={isLoading}>
      <Loader>Loading</Loader>
    </Dimmer>
    <Grid textAlign='center'  style={{ height: '80vh' }} verticalAlign='middle'>
      <Grid.Column textAlign='left'  style={{ maxWidth: 750 }}>
        <Message
        attached
        header='Account Register'
        content='Fill out the form below to sign-up for a new account'
        />
        <Form className='attached fluid segment' onSubmit={onSubmit}>
          <Form.Group widths='equal'>
            <Form.Input
              fluid
              onChange={onChange}
              name='firstname'
              label='First Name'
              placeholder='First Name'
              type='text'
            />
            <Form.Input
              fluid
              onChange={onChange}
              name='lastname'
              label='Last Name'
              placeholder='Last Name'
              type='text'
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input name='address' label='Address' onChange={onChange} placeholder='Address' type='text' />
            <Form.Input name='phone' label='Phone Number' onChange={onChange} placeholder='Phone No.' type='text' />
            <Form.Input name='email' label='Email' onChange={onChange} placeholder='Email address' type='email' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input name='password' onChange={onChange} label='Password' type='password' />
            <Form.Input label='Confirm password' onChange={onChange} type='password' name='password2'/>
          </Form.Group>
          <Form.Checkbox  inline label='I agree to the terms and conditions' 
            checked={isChecked} 
            onClick={(e) => {setIsChecked(!isChecked)}}
          />
          <Button textAlign='left' style={{ width: '100%' }}  loading={isLoading} positive>Submit</Button>
        </Form>
        <Message attached='bottom' warning>
          <Icon name='help' />
          Already signed up?&nbsp;<Link to='/login'>Login here</Link>&nbsp;instead.
        </Message>
        </Grid.Column>
      </Grid>
    </>
  )
}

export default Register