import { useParams, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { useEffect, useState} from 'react'
import {Grid, Dimmer, Loader, Divider, Header, Segment} from 'semantic-ui-react';
import { toast } from 'react-toastify';
import {getJob, reset as jobReset} from '../../features/jobs/jobSlice';
import { getJobPhotos } from '../../features/photos/photoSlice';
import {submitOffer, reset as offerReset} from '../../features/offers/offerSlice';
import Map from '../../components/jobs/Map'
import ApplicationForm from '../../components/jobs/ApplicationForm';
import Comments from '../../components/jobs/Comments';
import JobPhotoCarousel from '../../components/carousel/JobPhotoCarousel';

function Job() {
  let {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.auth);
  const {job, isLoading, isSuccess, isError, message,} = useSelector((state) => state.jobs);
  const {applicationsError, applicationsMessage, applicationsLoading, applicationsSuccess } = useSelector((state) => state.application);
  const {offerError, offerSuccess, offerMessage} = useSelector((state)=> state.offer);
  const {photos, photoError, photoLoading, photoMessage} = useSelector((state)=>state.photos)
  const [offer, setOffer] = useState('');
  const onOfferChange = (e)=> {
    e.preventDefault();
    setOffer(e.target.value)
  }
  const onOfferSubmit = (e) => {
    e.preventDefault();
    if(offer.length <= 0) {
      toast.error('Offer cannot be empty')
      return;
    }
    dispatch(submitOffer({jobId:job._id, text:offer, talent:user.id}));
  };

  useEffect (() => {
    dispatch(getJob(id));
    dispatch(getJobPhotos(id));
    if(offerError) {
      toast.error(offerMessage);
    }
    if(offerSuccess) {
      toast.success('Offer sent')
    }
    if(photoError) {
      toast.error(photoMessage)
    }
    if(applicationsSuccess){
      toast.success('Application sent')
    }
    if(applicationsError) {
      toast.error(applicationsMessage);
    }
    if(isError){
      toast.error(message)
    }
    if(!user) {
      navigate('/login')
    }
    return ()=> {
      dispatch(jobReset())
      dispatch(offerReset())
    }
  }, [id, isSuccess, user, navigate, dispatch, isError, message, applicationsSuccess, applicationsError, applicationsMessage, offerError, offerSuccess, offerMessage, photoError, photoMessage]);

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
              <Header as='h1' color='grey'>{job?.title}</Header>
              <Divider fitted />
              <Grid>
                <Grid.Row style={{paddingTop:'30px'}}>
                  <Grid.Column floated='left' width={5}>
                    <Header color='blue' sub>₱ {job?.budget} <span> · {job?.duration}</span></Header>
                  </Grid.Column>
                  <Grid.Column floated='right' width={6}>
                    <Header sub>{job?.location}</Header>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{marginBottom:'30px'}}>
                  <Grid.Column>
                    <Header as='h3'> {job?.description} </Header>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <div style={{margin:'20px 0px'}}>
                {photoLoading ? (
                  <Dimmer>
                    <Loader>Loading</Loader>
                  </Dimmer>
                ) : <></>}
                <JobPhotoCarousel photos={photos} text={'Job Photos'} />
              </div>
              <Map draggable={false} height='300px' width='100%' coords={{ lng:job?.geolocation?.coordinates[0], lat:job?.geolocation?.coordinates[1]}}/>
            </Grid.Column>
          <Grid.Column width={5}>
            <ApplicationForm applicationsLoading={applicationsLoading} user={user} jobUser={job.user} jobId={job._id} />
          </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column  width={11}>
              <Comments offers={job.offers} offer={offer} onOfferChange={onOfferChange} onOfferSubmit={onOfferSubmit} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  )
}

export default Job;