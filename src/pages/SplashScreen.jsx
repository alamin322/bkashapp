// import liraries
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

// create a component
const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomePage');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Animatable.View animation="zoomIn" duration={1300}>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo/bkash.png')}
        />
      </Animatable.View>
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

  logo: {
    width: 200,
    height: 150,
    resizeMode: 'stretch',
  },
});

//make this component available to the app
export default SplashScreen;
