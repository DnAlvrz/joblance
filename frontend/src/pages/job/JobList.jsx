import {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Item, Message, Container, Dimmer, Loader, Pagination} from 'semantic-ui-react'
import { toast } from 'react-toastify'
import {getOpenJobs, reset} from '../../features/jobs/jobSlice'
import JobItem from '../../components/JobItem'


function JobList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activePage, setActivePage] = useState(1);

  const {user} = useSelector((state)=> state.auth)
  const {jobs, isLoading, isError, message, count} = useSelector((state) => state.jobs);


  const pageChange = (event, data)=>{
    setActivePage(data.activePage);
    dispatch(getOpenJobs(activePage));
  }

  useEffect( () => {
    if(isError){
      toast.error(message)
    }

    if(!user) {
      navigate('/login')
    }

    dispatch(getOpenJobs(activePage));

    return () => {
      dispatch(reset())
    }

  }, [user, activePage, isError, navigate, dispatch, message])
  if(isLoading) {
    return(
    <>
      <Dimmer active={isLoading} inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    </>
    )
  }

  return (
    <>
    <Message  size='large'>
      <Item.Group divided>
      {jobs.map(job =>  <JobItem key={job._id} job={job}/>)}
      </Item.Group>
      <Container text>
        <Pagination defaultActivePage={activePage} totalPages={count/10} onPageChange={pageChange} />
      </Container>
    </Message>
    </>
  )
}

export default JobList