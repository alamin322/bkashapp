import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Icon name="home" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Icon name="inbox" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingVertical: 10,
        // paddingHorizontal: 20,
        padding: 20,
        backgroundColor: '#E1136E',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 5,
    },
    button: {
        paddingHorizontal: 10,
    },
});

export default Footer;
