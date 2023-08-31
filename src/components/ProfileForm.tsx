
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { UserProfileRequest, UserProfileUpdateRequest, UserProfileResponse, UserProfileUpdateResponse } from '../types/Types';
import { getUserProfile, updateUserProfile } from '../apis/ProfileApi';

const ProfileForm: React.FC = () => {
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [address, setAddress] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const handleGetProfile = async () => {
    try {
      const request: UserProfileRequest = {
        token: 'YOUR_USER_TOKEN', // Replace with the actual user token
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

  const handleUpdateProfile = async () => {
    try {
      const request: UserProfileUpdateRequest = {
        token: 'YOUR_USER_TOKEN', // Replace with the actual user token
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
      <Button title="Get Profile" onPress={handleGetProfile} />
      <Button title="Update Profile" onPress={handleUpdateProfile} />
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

export default ProfileForm;