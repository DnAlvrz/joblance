import React from 'react'
import { useReducer } from 'react';
import { List } from 'semantic-ui-react';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';
import ViewModal from './ViewModal';
import ListItem from './ListItem';
import { useState } from 'react';

const modalReducer = (state, modalAction) => {
  switch(modalAction.type) {
    case 'editModalOpen': 
      return {...state, editModalOpen:true};    
    case 'deleteModalOpen':
      return {...state, deleteModalOpen:true};
    case 'viewModalOpen':
      return {...state, viewModalOpen:true};
    case 'CLOSE_MODAL':
      return { ...state, editModalOpen:false,  deleteModalOpen:false, viewModalOpen: false};
    default:
      throw new Error('Something went wrong while trying to open the modal');
  }
}

function ListUserJobs({jobs,}) {
  const [state, dispatch] = useReducer(modalReducer, {
    editModalOpen:false,
    deleteModalOpen: false,
    viewModalOpen: false,
    closeOnEscape: true,
    closeOnDimmerClick: true,
  });

  const [currentJob, setCurrentJob] = useState(null);

  const {editModalOpen, deleteModalOpen, viewModalOpen} = state;

  const [formData, setFormData] = useState({
    title:currentJob?.title,
    description: currentJob?.description,
    budget: currentJob?.budget,
    location: currentJob?.location,
    duration: currentJob?.duration,
  }); 

  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  return (
    <>
      <List animated   divided relaxed>
        {jobs.map((job) =>
          <ListItem setCurrentJob={setCurrentJob} dispatch={dispatch} job={job} key={job._id} />
        )}
      </List>
      <div style={{maxWidth:'70%', paddingLeft:'10px', marginLeft:'50px'}}>
      <EditModal job={currentJob} currentJob={currentJob} dispatch={dispatch} open={editModalOpen} />
      <DeleteModal currentJob={currentJob} dispatch={dispatch} open={deleteModalOpen} />
      <ViewModal currentJob={currentJob} dispatch={dispatch} open={viewModalOpen} />
      </div>
    </>
  )
}

export default ListUserJobs