import { useParams, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import {useState, useEffect} from 'react'
import {Grid, Message, Dimmer, Item, Loader} from 'semantic-ui-react';
import {getJob,reset} from '../features/jobs/jobSlice';

import Map from '../components/Map'
import { toast } from 'react-toastify';


function Job() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.auth);
  const [coords, setCoords] = useState({
    lat:0,
    lng:0
  });

  const {jobs, isLoading, isError, message}  = useSelector((state)=> state.jobs)

  // GEt job
  useEffect (() => {
    if(isError){
      toast.error('message')
    }
    if(!user) {
      navigate('/login')
    }
    if(jobs[0]) {
      setCoords((prevState)=> ({...prevState, lat:jobs[0].lat, lng:jobs[0].long}))
    }
    // TODO: set job to localstorage for persistence
    dispatch(getJob(id));
    return ()=> {
      dispatch(reset)
    }

  }, [id, user, navigate, dispatch]);

  if(isLoading) {
    return
    <>
    <Dimmer active={isLoading} inverted>
      <Loader inverted>Loading</Loader>
    </Dimmer>
    </>
  }

  return (
    <>
      <Message >
        <Grid >
          <Grid.Row columns={3} divided>
            <Grid.Column width={10}>
              <h1>Title: {jobs[0].title }</h1>
            </Grid.Column>
            <Grid.Column>
              <h1>Title: {jobs[0].title }</h1>
            </Grid.Column>
            <Grid.Column>
              <h1>Title: {jobs[0].title }</h1>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Map draggable={false} height='300px' zoom={11} width='400px' coords={coords} setCoords={setCoords}/>
      </Message>
    </>
  )
}

export default Job;