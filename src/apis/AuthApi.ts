
import axios from 'axios';
import { UserLoginRequest, UserLoginResponse } from '../types/Types';

const BASE_URL = 'https://api.example.com';

const loginUser = async (request: UserLoginRequest): Promise<UserLoginResponse> => {
  try {
    const response = await axios.post<UserLoginResponse>(`${BASE_URL}/api/login`, request);
    return response.data;
  } catch (error) {
    throw new Error('Failed to login user');
  }
};

export { loginUser };