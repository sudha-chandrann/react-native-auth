
import React from 'react';
import SignUpPage from './screens/SignUpPage';
import Toast from 'react-native-toast-message';
import LoginPage from './screens/LoginPage';
import HomePage from './screens/HomePage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
        >
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{
              title: '🏠 Dashboard',
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Signup"
            component={SignUpPage}
            options={{
             headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <Toast />
    </>
  );
};

export default App;

