
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RegistrationScreen from '../screens/RegistrationScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AdminUserDetailsScreen from '../screens/AdminUserDetailsScreen';

const AppNavigator = createStackNavigator(
  {
    Registration: {
      screen: RegistrationScreen,
      navigationOptions: {
        title: 'Registration',
      },
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Login',
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Profile',
      },
    },
    AdminUserDetails: {
      screen: AdminUserDetailsScreen,
      navigationOptions: {
        title: 'Admin User Details',
      },
    },
  },
  {
    initialRouteName: 'Registration',
  }
);

export default createAppContainer(AppNavigator);