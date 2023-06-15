import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Features = () => {

    const data = [
        { id: '1', name: 'Send Money', image: require('../assets/icons/sendmoney.webp') },
        { id: '2', name: 'Mobile Recharge', image: require('../assets/icons/mobilerecharge.webp') },
        { id: '3', name: 'Cash Out', image: require('../assets/icons/cashout.webp') },
        { id: '4', name: 'Payment', image: require('../assets/icons/payment.webp') },
        { id: '5', name: 'Add Money', image: require('../assets/icons/addmoney.webp') },
        { id: '6', name: 'PayBill', image: require('../assets/icons/paybill.webp') },
        { id: '7', name: 'Ticket', image: require('../assets/icons/ticket.png') },
        { id: '8', name: 'More..', image: require('../assets/icons/more.png') },
    ];

    // const renderFeaturesItems = ({ item }) => (
    //     <View style={styles.productItem}>
    //             <Image source={item.image} style={styles.productImage} resizeMode="cover" />
    //             <Text style={styles.productName}>{item.name}</Text>
    //     </View>
    // );

    const renderFeaturesItems = ({ item }) => (
        <TouchableOpacity style={styles.productItem} onPress={() => console.log(item.name)}>
            <Image source={item.image} style={styles.productImage} resizeMode="cover" />
            <Text style={styles.productName}>{item.name}</Text>
        </TouchableOpacity>
    );


    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={data.slice(0, 4)}
                    renderItem={renderFeaturesItems}
                    keyExtractor={(item) => item.id}
                    horizontal
                    contentContainerStyle={styles.rowContainer}
                />

                <FlatList
                    data={data.slice(4, 8)}
                    renderItem={renderFeaturesItems}
                    keyExtractor={(item) => item.id}
                    horizontal
                    contentContainerStyle={styles.rowContainer}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 20,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    rowContainer: {
        marginBottom: 20,
    },
    productItem: {
        // marginRight: 15,
        margin: 13,
        alignItems: 'center',
    },
    productImage: {
        width: 50,
        height: 50,

        borderRadius: 5,
    },
    productName: {
        marginTop: 5,
        textAlign: 'center',
    },
});

export default Features;
