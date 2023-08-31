
import axios, { AxiosResponse } from 'axios';
import { AdminUserDetailsRequest, AdminUserDetailsResponse } from '../types/Types';

const BASE_URL = 'https://api.example.com';

const getAdminUserDetails = async (request: AdminUserDetailsRequest): Promise<AdminUserDetailsResponse> => {
  try {
    const response: AxiosResponse<AdminUserDetailsResponse> = await axios.get(`${BASE_URL}/api/admin/users`, { headers: { Authorization: `Bearer ${request.token}` } });
    return response.data;
  } catch (error) {
    throw new Error('Failed to get admin user details');
  }
};

export default {
  getAdminUserDetails,
};