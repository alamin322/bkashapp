import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const Demo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../assets/images/logo/bkash.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.content}>
                <Text style={styles.welcomeText}>Welcome to bKash!</Text>
                <Text style={styles.subtitle}>Send Money, Recharge, and more</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                <Text style={styles.footerText}>
                    By signing in or signing up, you agree to our Terms of Service and Privacy Policy.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    header: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        width: 200,
        height: 80,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 30,
        textAlign: 'center',
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#1376e0',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
    },
    footerText: {
        fontSize: 12,
        color: '#999',
        marginTop: 20,
        textAlign: 'center',
    },
});

export default Demo;
