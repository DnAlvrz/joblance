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



const getUserPhotos = async (token, userId) => {
  const config = {
    headers: {
      Authorization: token
    }
  };
  const response = await axios.get(`${API_URL}users/${userId}`, config)
  return response.data
}

const photoService = {
  getJobPhotos,
  getUserPhotos
};


export default photoService;