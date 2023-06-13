//import liraries
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
// ================= For navigation different page =================
import { useNavigation } from '@react-navigation/native';

// create a component
const UserProfile = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>UserProfile</Text>
            <Button
                onPress={() => navigation.navigate('HomePage')}
                title="Back"
                color={"black"}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default UserProfile;
