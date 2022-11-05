import { useParams, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { useEffect} from 'react'
import {Grid, Dimmer, Loader, Divider, Header, Segment} from 'semantic-ui-react';
import {getJob, reset} from '../../features/jobs/jobSlice';

import Map from '../../components/jobs/Map'
import { toast } from 'react-toastify';
import ApplicationForm from '../../components/jobs/ApplicationForm';
import Comments from '../../components/jobs/Comments';


function Job() {
  let {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.auth);
  const {job, isLoading, isSuccess, isError, message,} = useSelector((state) => state.jobs);

  useEffect (() => {
    dispatch(getJob(id));

    if(isSuccess){
      toast.success('Application sent')
    }

    if(isError){
      toast.error(message)
    }
    if(!user) {
      navigate('/login')
    }

    return ()=> {
      dispatch(reset())
    }
  }, [id, isSuccess, user, navigate, dispatch, isError, message]);

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
      <Segment>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column  width={11}>
              <Header as='h1'>{job?.title}</Header>
              <Divider fitted />
              <Grid>
                <Grid.Row style={{paddingTop:'30px'}}>
                  <Grid.Column floated='left' width={5}>
                    <Header sub>₱ {job?.budget} <span> · {job?.duration}</span></Header>
                  </Grid.Column>
                  <Grid.Column floated='right' width={6}>
                    <Header sub>{job?.location}</Header>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{marginBottom:'30px'}}>
                  <Grid.Column>
                    {job?.description}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Map draggable={false} height='300px' width='100%' coords={{lat:job?.lat, lng:job?.long}}/>
            </Grid.Column>
          <Grid.Column width={5}>
            <ApplicationForm user={user} jobUser={job.user} jobId={job._id} />
          </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column  width={11}>
              <Comments/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  )
}

export default Job;