
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { UserProfileUpdateRequest } from '../types/Types';
import { updateUserProfile } from '../apis/ProfileApi';

interface ProfileFormProps {
  token: string;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ token }) => {
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [address, setAddress] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const handleSaveProfile = () => {
    const request: UserProfileUpdateRequest = {
      token,
      name,
      contactInfo,
      address,
      profilePicture,
    };

    updateUserProfile(request)
      .then((response) => {
        console.log(response.message);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Contact Info"
        value={contactInfo}
        onChangeText={setContactInfo}
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        placeholder="Profile Picture"
        value={profilePicture}
        onChangeText={setProfilePicture}
      />
      <Button title="Save" onPress={handleSaveProfile} />
    </View>
  );
};

export default ProfileForm;