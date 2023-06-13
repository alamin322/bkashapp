import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';


const OfferAD = () => {

    return (
        <View style={styles.container}>
            <View style={styles.addContainer}>
                <Image source={require("../assets/images/add.png")} resizeMode='cover' style={styles.addImage} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    
    addContainer: {
        // marginTop: 10,
        marginBottom: 10,
    },

    addImage: {
        width: "100%",
        height: 150,
    },


});

export default OfferAD;
