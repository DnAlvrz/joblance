import {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Item, Message,Container, Dimmer, Loader, Pagination} from 'semantic-ui-react'
import {toast} from 'react-toastify'
import {getOpenJobs, reset} from '../features/jobs/jobSlice'
import JobItem from '../components/JobItem'


function JobList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activePage, setActivePage] = useState(1)
  
  const {user} = useSelector((state)=> state.auth)

  const {jobs, isLoading, isError, message, count} = useSelector((state) => state.jobs);

  const pageChange = (event, data)=>{
    console.log(data.activePage)
    setActivePage(data.activePage);
    dispatch(getOpenJobs(data.activePage));
  }

  useEffect( () => {
    if(isError){
      toast.error(message)
    }

    if(!user) {
      navigate('/login')
    }

    dispatch(getOpenJobs(activePage));

  }, [user, activePage, isError, navigate, dispatch, message])

  return (
    <>
    <Message  size='large'>
      <Dimmer active={isLoading}>
        <Loader>Loading</Loader>
      </Dimmer>
    
      <Message.Header>Available Jobs</Message.Header>
      <Item.Group divided> 
      {jobs.map(job =>  <JobItem job={job} />)}
      </Item.Group>
      <Container text>
        <Pagination defaultActivePage={1} totalPages={count/10} onPageChange={pageChange} />
      </Container>
    </Message>
    </>
  )
}

export default JobList