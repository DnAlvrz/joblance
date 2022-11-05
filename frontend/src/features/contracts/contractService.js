import axios from "axios";
const API_URL = '/api/v1/contracts/';

const createContract = async (token, contractData) => {
  const config = {
    headers: {
      Authorization: token
    }
  };
  const response = await axios.post(API_URL, contractData, config);
  return response.data;
}

const finishContract = async(token, contractId) => {
  const config = {
    headers: {
      Authorization: token
    }
  };
  const response = await axios.put(`${API_URL}${contractId}`, {}, config)
  return response.data
}



const contractService = {
  createContract,
  finishContract,
}

export default contractService;