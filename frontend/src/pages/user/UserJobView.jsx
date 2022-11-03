import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Dimmer,List, Loader, Tab } from 'semantic-ui-react'
import {getJob} from '../../features/jobs/jobSlice'
import Map from '../../components/jobs/Map';
import ApplicationListItem from '../../components/jobs/ApplicationListItem';

function UserJobView() {
  let {jobId} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth);
  const {job, isLoading, isError, message,} = useSelector((state) => state.jobs);

  const panes = [
    { menuItem: 'Contracts', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    { menuItem: 'Details', render: () => 
    <Tab.Pane>
      <Map draggable={false} height='400px' width='100%' coords={{lat:job?.lat, lng:job?.long}}/>
    </Tab.Pane> },
    { menuItem: 'Applications', render: () => 
    <Tab.Pane>
      <List divided verticalAlign='middle'>
        {
          job.applications.map(application => 
            <ApplicationListItem application={application}/>
          )
        }
      </List>
    </Tab.Pane>
    },
    
  ]

  useEffect(() => {
    console.log(job)
    if(isError){
      toast.error(message);
    }
    if(!user){
      navigate('/login')
    }
    dispatch(getJob(jobId))
  }, [dispatch, isError, jobId, message, navigate, user]);

  if(isLoading) {
    return (
      <Dimmer inverted active={isLoading}>
        <Loader/>
      </Dimmer>
    )
  }

  return (
      <Tab panes={panes} />
  )
}

export default UserJobView