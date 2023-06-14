import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// ================================ Start Import all the components ===============================
import Home from './src/pages/Home';
import SplashScreen from './src/pages/SplashScreen';
import UserProfile from './src/pages/UserProfile';
// ================================ End Import all the components ===============================

// create a new NavigationContainer object
const Stack = createNativeStackNavigator();

// Create your app
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen">
                {/* options={title, headerShown,} */}
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="HomePage"
                    component={Home}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="UserProfile"
                    component={UserProfile}
                // options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
