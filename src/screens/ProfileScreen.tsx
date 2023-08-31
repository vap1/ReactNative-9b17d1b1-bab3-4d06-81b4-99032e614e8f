
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { UserProfileRequest, UserProfileResponse, UserProfileUpdateRequest, UserProfileUpdateResponse } from '../types/Types';
import { getUserProfile, updateUserProfile } from '../apis/ProfileApi';

const ProfileScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [address, setAddress] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const request: UserProfileRequest = {
        token: 'YOUR_JWT_TOKEN', // Replace with actual JWT token
      };

      const response: UserProfileResponse = await getUserProfile(request);
      setName(response.user.name);
      setContactInfo(response.user.contactInfo || '');
      setAddress(response.user.address || '');
      setProfilePicture(response.user.profilePicture || '');
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const handleSaveProfile = async () => {
    try {
      const request: UserProfileUpdateRequest = {
        token: 'YOUR_JWT_TOKEN', // Replace with actual JWT token
        name,
        contactInfo,
        address,
        profilePicture,
      };

      const response: UserProfileUpdateResponse = await updateUserProfile(request);
      console.log('Profile updated successfully:', response.message);
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Name:</Text>
      <TextInput value={name} onChangeText={setName} />

      <Text>Contact Info:</Text>
      <TextInput value={contactInfo} onChangeText={setContactInfo} />

      <Text>Address:</Text>
      <TextInput value={address} onChangeText={setAddress} />

      <Text>Profile Picture:</Text>
      <Image source={{ uri: profilePicture }} style={{ width: 100, height: 100 }} />

      <Button title="Save" onPress={handleSaveProfile} />
    </View>
  );
};

export default ProfileScreen;