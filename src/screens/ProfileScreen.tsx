
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserProfileRequest, UserProfileResponse, User } from '../types/Types';
import { getUserProfile } from '../apis/ProfileApi';

const ProfileScreen: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const request: UserProfileRequest = {
        token: 'JWT_TOKEN', // Replace with the actual JWT token
      };

      const response: UserProfileResponse = await getUserProfile(request);
      setUser(response.user);
    } catch (error) {
      console.error(error); // Handle the error as per your requirement
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Profile</Text>
      {user && (
        <View style={styles.userContainer}>
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
      )}
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

export default ProfileScreen;