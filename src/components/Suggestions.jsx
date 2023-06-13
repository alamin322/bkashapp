import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/FontAwesome';

const Suggestion = (props) => {

    // Accessing props
    const prop_value = props.prop;

    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleAccordion = () => {
        setIsCollapsed(!isCollapsed);
    };

    const data = [
        { id: '1', name: 'Flyover Toll', image: require('../assets/suggestion/flyover.png') },
        { id: '2', name: 'MetLife', image: require('../assets/suggestion/metlife.png') },
        { id: '3', name: 'Sahdin Music', image: require('../assets/suggestion/shadinmusic.png') },
        { id: '4', name: 'Card Bill', image: require('../assets/suggestion/visa2.png') },
        // { id: '5', name: '01675950618', image: require('../assets/icons/cashout.png') },
        // { id: '6', name: '01675950618', image: require('../assets/icons/addmoney.png') },
        // { id: '7', name: '01675950618', image: require('../assets/icons/addmoney.png') },
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
            <View style={styles.accordionContainer}>
                <TouchableOpacity onPress={toggleAccordion} style={styles.header}>
                    <Text style={styles.headerText}>{prop_value}</Text>
                    <Icon name="chevron-down" size={16} color="#000" />
                </TouchableOpacity>
                <Collapsible collapsed={isCollapsed}>

                    {/* ======= Suggestion list itmes ======== */}

                    <View style={styles.content}>
                        <FlatList
                            data={data}
                            renderItem={renderFeaturesItems}
                            keyExtractor={(item) => item.id}
                            horizontal
                            contentContainerStyle={styles.rowContainer}
                        />
                    </View>

                    {/* ======= Suggestion list itmes end ======== */}

                </Collapsible>
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
        elevation: 5,
        marginBottom: 45,
    },
    accordionContainer: {
        marginBottom: 10,
    },
    header: {
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: '#fff',
        // backgroundColor: '#f2f2f2',
        padding: 7,
        marginBottom: -10,
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
        marginRight: 270
    },
    content: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#cccccc',
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

    // addContainer: {
    //     // marginTop: 10,
    //     marginBottom: 10,
    // },

    // addImage: {
    //     width: "100%",
    //     height: 150,
    // },


});

export default Suggestion;
