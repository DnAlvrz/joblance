
import { Button, Dropdown, Grid, Icon, List } from 'semantic-ui-react'

function ListItem({setCurrentJob,job, dispatch}) {

  return (
    <>
    <List.Item key={job._id} style={{padding:'10px'}}>
      <List.Content floated='right'>
        <Grid>
          <Grid.Row>
            <Grid.Column only='tablet computer'>
              <Button.Group size='mini'>
                <Button color='teal' onClick={(e)=> {
                  setCurrentJob(job);
                  dispatch({ type: 'editModalOpen' })
                  }}>
                  <Icon name='edit' />
                  Edit
                </Button>
                <Button color='red' onClick={(e)=> {dispatch({ type: 'deleteModalOpen' })}}>
                  <Icon name='trash alternate' />
                  Delete
                </Button>
                <Button color='black' onClick={(e)=> {dispatch({ type: 'viewModalOpen' })}}>
                  <Icon name='eye' />
                  View
                </Button>
              </Button.Group>
            </Grid.Column>
            <Grid.Column only='mobile'>
            <Dropdown icon='ellipsis vertical'>
            <Dropdown.Menu>
              <Dropdown.Item icon='edit' text='Edit' onClick={(e)=> {dispatch({ type: 'editModalOpen' })}} />
              <Dropdown.Item icon='delete' text='Delete' onClick={(e)=> {dispatch({ type: 'deleteModalOpen' })}} />
              <Dropdown.Item icon='eye' text='View' onClick={(e)=> {dispatch({ type: 'viewModalOpen' })}} />
            </Dropdown.Menu>
          </Dropdown>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </List.Content>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>{job.title}</List.Header>
        <List.Description as='a'>{job.createdAt}</List.Description>
      </List.Content>
    </List.Item>
    </>
  )
}

export default ListItem