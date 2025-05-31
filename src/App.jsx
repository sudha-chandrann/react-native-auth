/* eslint-disable no-unused-vars */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SignUpPage from './screens/SignUpPage';
import Toast from 'react-native-toast-message';
import LoginPage from './screens/LoginPage';
import HomePage from './screens/HomePage';

const App = () => {
  return (
    <>
   <HomePage/>
     <Toast/>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
