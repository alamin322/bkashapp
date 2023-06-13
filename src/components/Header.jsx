import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import IconMoney from 'react-native-vector-icons/MaterialIcons';
// ================= For navigation different page =================
import { useNavigation } from '@react-navigation/native';



// Create components from here
const Header = () => {

    const [balance, setBalance] = useState("Tap to check you Balance");
    const navigation = useNavigation();

    const showBalance = () => {
        // Alert.alert("you current balance is: 1000 tk");
        setBalance("5000 Tk");
        setTimeout(() => {
            setBalance("Tap to check you Balance");
        }, 2000)
    };

    const handleProfileClick = () => {
        navigation.navigate("UserProfile");
    };

    return (
        <View>

            {/* Header Section */}
            < View style={styles.container} >

                <View style={styles.leftContainer}>
                    <TouchableOpacity onPress={handleProfileClick}>
                        <Image
                            source={require('../assets/images/user.png')}
                            style={styles.userImage}
                            resizeMode="cover"
                            alt='UserImage'
                        />
                    </TouchableOpacity>

                </View>

                <View style={styles.middleContainer}>
                    <Text style={styles.userName}>Fatema Akter</Text>
                    <View style={styles.userBalance}>
                        <IconMoney
                            name="attach-money"
                            size={25}
                            color="#818181"
                            style={styles.money_icon}
                        />
                        <TouchableOpacity>
                            <Text style={styles.userBalanceText} onPress={showBalance}>{balance}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.rightContainer}>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/images/logo/logo.png')}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>

                </View>
            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#E1136E',
    },

    leftContainer: {
        flex: 1,
        marginRight: 10,
    },

    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },

    middleContainer: {
        flex: 3,
    },

    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#fff"
    },

    userBalance: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        marginTop: 10,
        padding: 10,
        borderRadius: 15,
    },

    userBalanceText: {
        color: "#000",
        marginLeft: 10,
        fontWeight: 'bold',
        marginTop: 4,
    },

    money_icon: {
        marginRight: -8
    },

    rightContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },

    logo: {
        width: 40,
        height: 40,
    },
});

export default Header;
