import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
// ================= Import components =================
import DropdownItems from '../components/Dropdowns';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Header from '../components/Header';
import OfferAD from '../components/OfferAD';
import Suggestion from '../components/Suggestions';

// ================= Import End components =================



// Create components from here
const Home = () => {

    const [balance, setBalance] = useState("Tap to check you Balance");


    const showBalance = () => {
        // Alert.alert("you current balance is: 1000 tk");
        setBalance("5000 Tk");
        setTimeout(() => {
            setBalance("Tap to check you Balance");
        }, 2000)
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <Header />
                <Features />
                <DropdownItems prop="My Bkash" />
                <OfferAD />
                <Suggestion prop="Suggestion" />
            </ScrollView>

            <Footer />

        </SafeAreaView>
    );
};



export default Home;
