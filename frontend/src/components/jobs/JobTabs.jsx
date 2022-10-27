import React from 'react'
import { Tab } from 'semantic-ui-react'
import ListUserJobs from '../user/ListUserJobs'


function JobTabs({jobs, isLoading}) {
  const vacant = jobs.filter( job => job.isOpen===true);
  const complete = jobs.filter( job => job.isOpen===false);
  
  const panes = [
    {
      menuItem: 'All',
      render: () =>
      <Tab.Pane loading={isLoading} attached={false}>
        <ListUserJobs jobs={jobs} />
      </Tab.Pane>,
    },
    {
      menuItem: 'Vacant',
      render: () =>
      <Tab.Pane loading={isLoading} attached={false}>
        <ListUserJobs jobs={vacant} />
      </Tab.Pane>,
    },
    {
      menuItem: 'Completed',
      render: () =>
      <Tab.Pane loading={isLoading} attached={false}>
        <ListUserJobs jobs={complete} />
      </Tab.Pane>,
    },

  ]
  return (
    <>
    <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    </>
  )
}

export default JobTabs