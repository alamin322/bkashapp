import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
// ================================ Start Import all the components ===============================
import Home from './src/pages/Home';
import SplashScreen from './src/pages/SplashScreen';
import UserProfile from './src/pages/UserProfile';
// ================================ End Import all the components ===============================

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// Create your app
const App = () => {
  const [value, setValue] = useState('left');

  const handleIconClick = newProp => {
    setValue('right');
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{drawerPosition: 'right'}}>
        <Drawer.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false, drawerLabel: () => null}}
        />
        <Drawer.Screen
          name="My Home"
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
