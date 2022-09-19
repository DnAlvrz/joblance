import axios from "axios";

const API_URL = '/api/v1/jobs/';

const createJob = async(jobData, token) => {
  const config = {
    headers: {
      Authorization: token
    }
  };

  const response = await axios.post(API_URL, jobData, config);
  return response.data;
};


const getJobs = async(token) => {
  const config = {
    headers: {
      Authorization: token
    }
  };

  const response = await axios.get(`${API_URL}`, config);
  return response.data;

};

const updateJob = async(jobId, token,jobData)=> {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  console.log(config)

};

const deleteJob = async (jobId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  console.log(config)
};

const jobService = {
  createJob,
  getJobs,
  updateJob,
  deleteJob,
}

export default jobService;