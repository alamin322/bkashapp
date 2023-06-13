//import liraries
import React, { useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import IconEmail from 'react-native-vector-icons/Entypo';
import { styles } from './BasicStyles';

// create a component
const ForgotPassword = ({ navigation }) => {
    const [email, setEamil] = useState("");


    const submitButtonHandle = () => {
        if (email.length === 0) {
            Alert.alert("Email is required.");
        } else {
            Alert.alert("Please Check you email to reset your password..");
        }
    }

    const handleBack = () => {
        navigation.navigate("LogIn page");
    }

    return (
        <View style={styles.container}>

            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require("../assets/Logo-23.png")} />
            </View>

            {/* Logo */}
            <Text style={styles.logoText}>
                Nimusoft Technologys Ltd.
            </Text>

            {/* input fields */}
            <View style={styles.inputView}>
                <IconEmail name="mail" size={25} color="#818181" style={styles.email_icon} />
                <TextInput
                    style={styles.inputText}
                    value={email}
                    onChangeText={setEamil}
                    placeholder='Email...'
                    placeholderTextColor={"black"}
                />
            </View>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText} onPress={submitButtonHandle}>
                    Submit
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText} onPress={handleBack}>
                    Back
                </Text>
            </TouchableOpacity>

        </View>
    );
};



//make this component available to the app
export default ForgotPassword;
