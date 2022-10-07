
import { useParams, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import {useState, useEffect} from 'react'
import {Grid, Message} from 'semantic-ui-react';
import { reset} from '../features/auth/authSlice';
import Map from '../components/Map'

 // const {id} = useParams();
function Job({job}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.auth);
  const [coords, setCoords] = useState({
    lat:job.lat,
    lng:job.lang
  });


  useEffect (() => {
    if(!user) {
      navigate('/login')
    }
    return () => {
      dispatch(reset())
    }
  }, [user, navigate, dispatch]);

  return (
    <>
    <Grid>
      <Grid.Row>
        <Grid.Column>
        <Message >

        </Message>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
        <Message >
          <Map coords={coords}/>
        </Message>
        </Grid.Column>
      </Grid.Row>
   </Grid>
   </>
  )
}

export default Job