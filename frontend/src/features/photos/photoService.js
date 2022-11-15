import axios from 'axios';

const API_URL = '/api/v1/photos/';

const getJobPhotos = async (token, jobId) => {
  const config = {
    headers: {
      Authorization: token
    }
  };
  const response = await axios.get(`${API_URL}jobs/${jobId}`, config)
  return response.data
}



const photoService = {
  getJobPhotos
};


export default photoService;