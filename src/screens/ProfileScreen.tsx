
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserProfileRequest, UserProfileResponse, UserProfileUpdateRequest, UserProfileUpdateResponse, User } from '../types/Types';
import { getUserProfile, updateUserProfile } from '../apis/ProfileApi';
import ProfileForm from '../components/ProfileForm';

interface ProfileScreenProps {
  token: string;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ token }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const request: UserProfileRequest = {
        token,
      };

      const response: UserProfileResponse = await getUserProfile(request);
      setUser(response.user);
    } catch (error) {
      console.error(error); // Handle the error as per your requirement
    }
  };

  const handleProfileUpdate = async (updatedUser: User) => {
    try {
      const request: UserProfileUpdateRequest = {
        token,
        ...updatedUser,
      };

      const response: UserProfileUpdateResponse = await updateUserProfile(request);
      console.log(response); // Handle the response as per your requirement
    } catch (error) {
      console.error(error); // Handle the error as per your requirement
    }
  };

  return (
    <View style={styles.container}>
      {user ? (
        <ProfileForm user={user} onProfileUpdate={handleProfileUpdate} />
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
});

export default ProfileScreen;