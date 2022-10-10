import { useParams, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import {useState, useEffect} from 'react'
import {Grid, Message, Dimmer, Item, Loader} from 'semantic-ui-react';
import {getJob} from '../features/jobs/jobSlice';

import Map from '../components/Map'
import { toast } from 'react-toastify';


function Job() {
  let {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.auth);
  const {job, isLoading, isError, message,} = useSelector((state) => state.jobs);

  // GEt job
  useEffect (() => {
    if(isError){
      toast.error(message)
    }
    if(!user) {
      navigate('/login')
    }
    dispatch(getJob(id));
  }, [id, user, navigate, dispatch]);

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
      <Message >
        <Grid >
          <Grid.Row columns={3  } divided>
            <Grid.Column width={10}>
              <h1>Title: {job.title}</h1>
            </Grid.Column>
            <Grid.Column>
              <h1>Title:</h1>
            </Grid.Column>
            <Grid.Column>
              <h1>Title: </h1>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Map draggable={false} height='300px' width='400px' coords={{lat:job.lat, lng:job.long}}/>
      </Message>
    </>
  )
}

export default Job;