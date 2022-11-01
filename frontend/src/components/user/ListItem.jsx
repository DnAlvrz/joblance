
import { Link } from 'react-router-dom';
import { Button, Dropdown, Grid, Icon, List } from 'semantic-ui-react'

function ListItem({setCurrentJob,job, modalDispatch}) {

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
                  modalDispatch({ type: 'editModalOpen' })
                  }}>
                  <Icon name='edit' />
                  Edit
                </Button>
                <Button color='red' onClick={(e)=> {
                  setCurrentJob(job);
                  modalDispatch({ type: 'deleteModalOpen' })}}
                >
                  <Icon name='trash alternate' />
                  Delete
                </Button>
                <Button color='black' onClick={(e)=> {modalDispatch({ type: 'viewModalOpen' })}}>
                  <Icon name='eye' />
                  View
                </Button>
              </Button.Group>
            </Grid.Column>
            <Grid.Column only='mobile'>
            <Dropdown icon='ellipsis vertical'>
            <Dropdown.Menu>
              <Dropdown.Item icon='edit' text='Edit' onClick={(e)=> {modalDispatch({ type: 'editModalOpen' })}} />
              <Dropdown.Item icon='delete' text='Delete' onClick={(e)=> {modalDispatch({ type: 'deleteModalOpen' })}} />
              <Dropdown.Item icon='eye' text='View' onClick={(e)=> {modalDispatch({ type: 'viewModalOpen' })}} />
            </Dropdown.Menu>
          </Dropdown>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </List.Content>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header> <Link to={`${job._id}`}>{job.title}</Link> </List.Header>
        <List.Description as='a'>{job.createdAt}</List.Description>
      </List.Content>
    </List.Item>
    </>
  )
}

export default ListItem