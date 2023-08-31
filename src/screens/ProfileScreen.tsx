
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { UserProfileRequest, UserProfileResponse, UserProfileUpdateRequest, UserProfileUpdateResponse } from '../types/Types';
import { getUserProfile, updateUserProfile } from '../apis/ProfileApi';

interface ProfileScreenProps {
  token: string;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ token }) => {
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [address, setAddress] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const request: UserProfileRequest = {
        token,
      };

      const response: UserProfileResponse = await getUserProfile(request);
      const { user } = response;
      setName(user.name);
      setContactInfo(user.contactInfo || '');
      setAddress(user.address || '');
      setProfilePicture(user.profilePicture || '');
    } catch (error) {
      console.error(error); // Handle the error as per your requirement
    }
  };

  const handleProfileUpdate = async () => {
    try {
      const request: UserProfileUpdateRequest = {
        token,
        name,
        contactInfo,
        address,
        profilePicture,
      };

      const response: UserProfileUpdateResponse = await updateUserProfile(request);
      console.log(response); // Handle the response as per your requirement
    } catch (error) {
      console.error(error); // Handle the error as per your requirement
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Info"
        value={contactInfo}
        onChangeText={setContactInfo}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Profile Picture"
        value={profilePicture}
        onChangeText={setProfilePicture}
      />
      <Button title="Save" onPress={handleProfileUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default ProfileScreen;