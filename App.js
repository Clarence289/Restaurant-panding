import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import SplashScreen from './components/SplashScreen';
import RegistrationForm from './components/RegistrationForm';
import Restaurant from './components/Restaurant'; // Import without curly braces

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
        <Stack.Screen name="Restaurant" component={Restaurant} />
        {/* <Stack.Screen name="RegistrationForm" component={RegistrationForm} /> */}
        {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
