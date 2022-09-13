import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
function JobList() {
  return (
    <div>
      <ul>
        <li><Link to="/jobs/1">Job 1</Link></li>
      </ul>
    </div>
  )
}

export default JobList