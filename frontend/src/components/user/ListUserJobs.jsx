import { List } from 'semantic-ui-react';
import ListItem from './ListItem';




function ListUserJobs({jobs,setCurrentJob, dispatch}) {

  return (
    
    <>
      <List animated   divided relaxed>
        {jobs.map((job) =>
          <ListItem setCurrentJob={setCurrentJob} dispatch={dispatch} job={job} key={job._id} />
        )}
      </List>
     
    </>
  )
}

export default ListUserJobs