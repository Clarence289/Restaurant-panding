import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can choose the icon library you prefer
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  const handleLogin = () => {
    if (isRegistered) {
     
    } else {
      console.log('User is not registered. Please sign up first.');
    }
  };

  const handleSignUp = () => {
    
    setIsRegistered(true);
  };

  const handleForgotPassword = () => {
   
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/Restaurant-icon.jpg')}
          style={styles.loginImage}
        />
      </View>
      <Text style={styles.loginText}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} disabled={!isRegistered} />
      </View>
      <Text onPress={handleForgotPassword} style={styles.link}>
        Forgot Password?
      </Text>
      <Text style={styles.orText}>or</Text>
      <View style={styles.buttonContainer}>
        <Button title="Sign Up" onPress={handleSignUp} />
      </View>
      {showRegistration && (
        <View>
          {/* Registration Form */}
          <TextInput placeholder="Full Name" style={styles.input} />
          <TextInput placeholder="New Email" style={styles.input} />
          <TextInput placeholder="New Password" style={styles.input} />
          <Button title="Register" onPress={() => setIsRegistered(true)} />
        </View>
      )}
      <View style={styles.space}></View> {/* Space between Sign Up and Social Buttons */}
      <TouchableOpacity style={styles.stretchedSocialButton} onPress={() => handleSocialLogin('Facebook')}>
        <FontAwesome5 name="facebook" size={20} color="#1877F2" style={styles.socialIcon} />
        <Text style={styles.socialButtonText}>Login with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.stretchedSocialButton} onPress={() => handleSocialLogin('Google')}>
        <FontAwesome5 name="google" size={20} color="red" style={styles.socialIcon} />
        <Text style={styles.yellowSocialButtonText}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  loginImage: {
    width: 200,
    height: 150,
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  input: {
    flex: 1,
  },
  buttonContainer: {
    width: '80%',
    borderRadius: 5,
    overflow: 'hidden',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  orText: {
    marginVertical: 10,
    fontSize: 18,
  },
  stretchedSocialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  socialIcon: {
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: 16,
    marginLeft: 10,
    textAlign: 'right',
  },
  yellowSocialButtonText: {
    fontSize: 16,
    color: 'yellow',
    marginLeft: 10,
    textAlign: 'right',
  },
  space: {
    height: 10,
  },
});

export default LoginScreen;
