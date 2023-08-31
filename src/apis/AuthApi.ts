
import axios from 'axios';
import { UserLoginRequest, UserLoginResponse } from '../types/Types';

const BASE_URL = 'https://api.example.com';

export const loginUser = async (request: UserLoginRequest): Promise<UserLoginResponse> => {
  try {
    const response = await axios.post(`${BASE_URL}/api/login`, request);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};