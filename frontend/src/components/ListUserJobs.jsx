import React from 'react'
import { List } from 'semantic-ui-react'
import ListItem from './ListItem'
function ListUserJobs({jobs}) {
  return (
    <>
    <List animated   divided relaxed>
      {jobs.map(job =>
        <ListItem job={job} />
      )}
    </List>
    </>
  )
}

export default ListUserJobs