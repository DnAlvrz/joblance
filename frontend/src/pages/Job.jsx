import { useParams, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import {useState, useEffect} from 'react'
import {Grid, Message, Dimmer, Item, Loader, GridRow} from 'semantic-ui-react';
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
      <Grid>
        <Grid.Row>
          <Grid.Column columns={8} width={10}>
            <Message >
              <Grid >
                <Grid.Row divided>
                  <Grid.Column width={10}>
                    <h1>Title: {job.title}</h1>
                  </Grid.Column>
                  <Grid.Column>
                    <h3>Budget: ₱ {job.budget}</h3>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <h1>{job.description} </h1>
              <Map draggable={false} height='300px' width='400px' coords={{lat:job.lat, lng:job.long}}/>
            </Message>
          </Grid.Column>
          <Grid.Column width={6}>
           <Message  >
              <h4> Apply for job </h4>

            </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </>
  )
}

export default Job;