import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
// ================================ Start Import all the components ===============================
import Home from './src/pages/Home';
import SplashScreen from './src/pages/SplashScreen';
import UserProfile from './src/pages/UserProfile';
// ================================ End Import all the components ===============================

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// Create your app
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="SplashScreen">
        <Drawer.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="MyHome"
          component={MainStackScreen}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const MainStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default App;
