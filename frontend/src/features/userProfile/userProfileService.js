import axios from 'axios'
const API_URL = `/api/v1/users/`

const getUser = async (token, userId) => {
  const config = {
    headers: {
      Authorization: token
    }
  };
  const responseData = await axios.get(`${API_URL}${userId}`, config);
  return responseData
}

const userProfileService = {
  getUser,
}

export default userProfileService