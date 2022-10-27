import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

function DeleteModal({open, dispatch, currentJob}) {

  return (
    <Modal
		closeOnEscape={true}
		closeOnDimmerClick={true}
		open={open}
		onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
		>
			<Modal.Header>Delete Job</Modal.Header>
			<Modal.Content>
				<p>Are you sure you want to delete job?</p>
			</Modal.Content>
			<Modal.Actions>
				<Button
					negative
				>
					No
				</Button>
				<Button
					positive
				>
					Yes
				</Button>
			</Modal.Actions>
		</Modal>

  )
}

export default DeleteModal