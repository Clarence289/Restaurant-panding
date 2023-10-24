import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const fillAnimation = new Animated.Value(0);
  const imageOpacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fillAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();

    Animated.timing(imageOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
      delay: 1000,
    }).start(() => {
      navigation.navigate('LoginScreen');
    });
  }, [fillAnimation, imageOpacity, navigation]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/Restaurant-icon.jpg')}
        style={[
          styles.logo,
          { opacity: imageOpacity },
        ]}
      />
      <View style={styles.space}></View>
      <Text style={styles.text}>Welcome to Savory Spoon</Text>
      <View style={styles.loadingBar}>
        <Animated.View
          style={[
            styles.loadingBarFill,
            {
              width: fillAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  text: {
    fontSize: 24,
    fontFamily: 'YourCustomFont', 
  },
  loadingBar: {
    width: '80%',
    height: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 20,
  },
  loadingBarFill: {
    height: '100%',
    backgroundColor: 'green',
  },
  loadingText: {
    marginTop: 10,
  },
  space: {
    height: 20, // Adjust the height to control the space between the image and text.
  },
});

export default SplashScreen;
