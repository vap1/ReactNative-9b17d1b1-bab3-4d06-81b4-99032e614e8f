
import axios from 'axios';
import { AdminUserDetailsRequest, AdminUserDetailsResponse } from '../types/Types';

const API_URL = 'https://example.com/api'; // Replace with your actual API URL

export const getAdminUserDetails = async (request: AdminUserDetailsRequest): Promise<AdminUserDetailsResponse> => {
  try {
    const response = await axios.get(`${API_URL}/admin/users`, {
      headers: {
        Authorization: `Bearer ${request.token}`,
      },
    });
    return response.data as AdminUserDetailsResponse;
  } catch (error) {
    throw new Error('Failed to get admin user details');
  }
};