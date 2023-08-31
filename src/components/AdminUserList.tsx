
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AdminUserDetailsRequest, AdminUserDetailsResponse, User } from '../types/Types';
import AdminApi from '../apis/AdminApi';

const AdminUserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchAdminUserDetails = async () => {
      try {
        const request: AdminUserDetailsRequest = {
          token: 'YOUR_ADMIN_AUTH_TOKEN', // Replace with the actual admin token
        };

        const response: AdminUserDetailsResponse = await AdminApi.getAdminUserDetails(request);
        setUsers(response.users);
      } catch (error) {
        console.error(error); // Handle the error as per your requirement
      }
    };

    fetchAdminUserDetails();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Admin User List</Text>
      {users.map((user) => (
        <View key={user.email} style={styles.userContainer}>
          <Text style={styles.userEmail}>{user.email}</Text>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userContactInfo}>{user.contactInfo}</Text>
          <Text style={styles.userAddress}>{user.address}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  userContainer: {
    marginBottom: 16,
  },
  userEmail: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 14,
  },
  userContactInfo: {
    fontSize: 14,
  },
  userAddress: {
    fontSize: 14,
  },
});

export default AdminUserList;