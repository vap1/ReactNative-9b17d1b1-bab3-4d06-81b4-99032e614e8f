
import axios from 'axios';
import { UserProfileRequest, UserProfileResponse, UserProfileUpdateRequest, UserProfileUpdateResponse } from '../types/Types';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const getUserProfile = async (request: UserProfileRequest): Promise<UserProfileResponse> => {
  try {
    const response = await axios.get(`${BASE_URL}/api/profile`, {
      headers: {
        Authorization: `Bearer ${request.token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to get user profile');
  }
};

export const updateUserProfile = async (request: UserProfileUpdateRequest): Promise<UserProfileUpdateResponse> => {
  try {
    const response = await axios.put(`${BASE_URL}/api/profile`, request, {
      headers: {
        Authorization: `Bearer ${request.token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to update user profile');
  }
};