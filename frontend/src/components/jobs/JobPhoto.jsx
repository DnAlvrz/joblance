import React from 'react'
import { Form } from 'semantic-ui-react'

function JobPhoto({onFileChange}) {
  return (
    <Form encType="multipart/form-data">
      <Form.Input label='Upload job photos' type='file' multiple onChange={onFileChange}/>
    </Form>
  );
}
export default JobPhoto