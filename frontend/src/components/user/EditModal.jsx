import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import JobForm from '../jobs/JobForm';
import { useState } from 'react';

function EditModal({job, open, dispatch,}) {
	const [formData, setFormData] = useState({
    title:job?.title,
    description: job?.description,
    budget: job?.budget,
    location: job?.location,
    duration: job?.duration,
  }); 

  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

	const handleSubmit = ()=> {
		console.log(formData)
	}

  return (
		
			<Modal
				centered={false}
				size='tiny'
				style={{maxWidth:'70%'}}
				closeOnEscape={true}
				closeOnDimmerClick={true}
				open={open}
				onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
			>
				<Modal.Header>Edit Job</Modal.Header>
				<Modal.Content scrolling>
					<JobForm  onChange={onChange} formData={formData} />
				</Modal.Content >
				<Modal.Actions>
					<Button positive onClick={handleSubmit}>
						Submit
					</Button>
				</Modal.Actions>
			</Modal>
  )
}

export default EditModal