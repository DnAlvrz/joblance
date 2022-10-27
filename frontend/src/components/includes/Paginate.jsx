import React from 'react'
import { Pagination } from 'semantic-ui-react'

function Paginate() {
  return (
    <Pagination defaultActivePage={1} totalPages={10} onPageChange={(event, data)=>{console.log(data.activePage)}} />
  )
}

export default Paginate;