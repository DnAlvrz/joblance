import axios from "axios";

const API_URL = '/api/v1/jobs/';

const getJob = async (token, jobId ) => {
  const config = {
    headers: {
      Authorization: token
    }
  };
  const response = await axios.get(`${API_URL}view/${jobId}`, config);
  return response.data;
};

const createJob = async(jobData, token) => {
  const config = {
    headers: {
      Authorization: token
    }
  };
  const response = await axios.post(API_URL, jobData, config);
  return response.data;
};

const addJobPhoto = async(jobId, jobPhotos, token) => {
  const config = {
    headers: {
      Authorization: token
    }
  };
  const response = await axios.post(`${API_URL}photos/${jobId}`, jobPhotos, config);
  return response.data;
}

const getJobs = async(token, page) => {
  const config = {
    headers: {
      Authorization: token
    }
  };
  const response = await axios.get(`${API_URL}/?page=${page}&limit=10`, config);
  return response.data;
};

const getUserJobs = async (token) => {
  const config = {
    headers: {
      Authorization: token
    }
  };
  const response = await axios.get(`${API_URL}user`, config);
  return response.data
};

const sendApplication = async(token, applicationData ) => {
  const config = {
    headers: {
      Authorization:token
    }
  };

  const response = await axios.post(`${API_URL}application`, {jobId:applicationData.jobId, message:applicationData.applicationMessage}, config)
  return response.data
}

const updateJob = async(token, jobData)=> {
  const config = {
    headers: {
      Authorization: token
    }
  }
  console.log('hit');
  const response = await axios.put(`${API_URL}${jobData.jobId}`, jobData.formData, config)
  return response.data;
};

const deleteJob = async (token, jobId) => {
  const config = {
    headers: {
      Authorization: token
    }
  };
  const response = await axios.delete(`${API_URL}${jobId}`, config);
  return response.data;
};

const jobService = {
  createJob,
  addJobPhoto,
  getJobs,
  updateJob,
  deleteJob,
  getJob,
  getUserJobs,
  sendApplication
}

export default jobService;