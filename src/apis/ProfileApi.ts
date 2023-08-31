
import axios, { AxiosResponse } from 'axios';
import { UserProfileRequest, UserProfileResponse, UserProfileUpdateRequest, UserProfileUpdateResponse } from '../types/Types';

const BASE_URL = 'https://api.example.com';

export const getUserProfile = async (request: UserProfileRequest): Promise<UserProfileResponse> => {
  try {
    const response: AxiosResponse<UserProfileResponse> = await axios.get(`${BASE_URL}/api/profile`, { headers: { Authorization: `Bearer ${request.token}` } });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to get user profile');
  }
};

export const updateUserProfile = async (request: UserProfileUpdateRequest): Promise<UserProfileUpdateResponse> => {
  try {
    const response: AxiosResponse<UserProfileUpdateResponse> = await axios.put(`${BASE_URL}/api/profile`, request, { headers: { Authorization: `Bearer ${request.token}` } });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update user profile');
  }
};