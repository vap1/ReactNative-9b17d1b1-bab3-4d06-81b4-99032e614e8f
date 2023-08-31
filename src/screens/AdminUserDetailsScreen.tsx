
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AdminUserDetailsRequest, AdminUserDetailsResponse, User } from '../types/Types';
import { getAdminUserDetails } from '../apis/AdminApi';

const AdminUserDetailsScreen: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchAdminUserDetails();
  }, []);

  const fetchAdminUserDetails = async () => {
    try {
      const request: AdminUserDetailsRequest = {
        token: 'ADMIN_JWT_TOKEN', // Replace with the actual admin token
      };

      const response: AdminUserDetailsResponse = await getAdminUserDetails(request);
      setUsers(response.users);
    } catch (error) {
      console.error(error); // Handle the error as per your requirement
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Admin User Details</Text>
      {users.map((user) => (
        <View key={user.email} style={styles.userContainer}>
          <Text style={styles.label}>Name:</Text>
          <Text>{user.name}</Text>
          <Text style={styles.label}>Email:</Text>
          <Text>{user.email}</Text>
          <Text style={styles.label}>Contact Info:</Text>
          <Text>{user.contactInfo}</Text>
          <Text style={styles.label}>Address:</Text>
          <Text>{user.address}</Text>
          <Text style={styles.label}>Profile Picture:</Text>
          <Text>{user.profilePicture}</Text>
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
  label: {
    fontWeight: 'bold',
  },
});

export default AdminUserDetailsScreen;