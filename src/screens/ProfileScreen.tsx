
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserProfileRequest, UserProfileResponse } from '../types/Types';
import { getUserProfile } from '../apis/ProfileApi';

const ProfileScreen: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfileResponse | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const request: UserProfileRequest = {
          token: 'YOUR_USER_TOKEN', // Replace with the actual user token
        };

        const response: UserProfileResponse = await getUserProfile(request);
        setUserProfile(response);
      } catch (error) {
        console.error(error); // Handle the error as per your requirement
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <View style={styles.container}>
      {userProfile ? (
        <>
          <Text style={styles.heading}>Profile</Text>
          <Text>Name: {userProfile.user.name}</Text>
          <Text>Email: {userProfile.user.email}</Text>
          <Text>Contact Info: {userProfile.user.contactInfo}</Text>
          <Text>Address: {userProfile.user.address}</Text>
          <Text>Profile Picture: {userProfile.user.profilePicture}</Text>
        </>
      ) : (
        <Text>Loading...</Text>
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
});

export default ProfileScreen;