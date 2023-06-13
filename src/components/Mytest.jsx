//import liraries
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import UserProfile from '../pages/UserProfile';

// create a component
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="UserProfile" component={UserProfile} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;

