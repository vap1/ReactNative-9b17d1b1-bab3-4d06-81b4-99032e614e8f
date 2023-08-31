
import axios from 'axios';
import { UserRegistrationRequest, UserRegistrationResponse } from '../types/Types';

const BASE_URL = 'https://api.example.com';

export const registerUser = async (request: UserRegistrationRequest): Promise<UserRegistrationResponse> => {
  try {
    const response = await axios.post(`${BASE_URL}/api/register`, request);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};