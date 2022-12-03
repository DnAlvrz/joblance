import React, { useEffect } from 'react'
import { Pagination } from 'semantic-ui-react'

function Paginate({jobCount}) {
  useEffect(()=> {
    console.log(jobCount)
  })
  return (
    <>
      <Pagination defaultActivePage={1} totalPages={jobCount} onPageChange={(event, data)=>{console.log(data.activePage)}} />
    </>
  )
}

export default Paginate;