import {useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Item, Message,Container, Dimmer, Loader, Pagination} from 'semantic-ui-react'
import {toast} from 'react-toastify'
import {getOpenJobs, reset} from '../features/jobs/jobSlice'
import JobItem from '../components/JobItem'


function JobList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const {user} = useSelector((state)=> state.auth)

  const {jobs, isLoading, isError, message} = useSelector((state) => state.jobs);

  useEffect( () => {
    if(isError){
      toast.error(message)
    }
    if(!user) {
      navigate('/login')
    }
    dispatch(getOpenJobs(1));

  }, [user, isError, isLoading, message, navigate, dispatch])

  return (
    <>
    <Dimmer active={isLoading}>
      <Loader>Loading</Loader>
    </Dimmer>
    <Message  size='large'>
      <Message.Header>Available Jobs</Message.Header>
      <Item.Group divided>
        <JobItem />
      </Item.Group>
      <Container text>
        <Pagination defaultActivePage={1} totalPages={10} onPageChange={(event, data)=>{console.log(data.activePage)}} />
      </Container>
    </Message>
    </>
  )
}

export default JobList