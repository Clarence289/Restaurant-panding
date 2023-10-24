import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const RegistrationForm = () => {
  const handleGoogleLogin = () => {
    // Handle Google login logic
  };

  const handleFacebookLogin = () => {
    // Handle Facebook login logic
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.loginText}>Registration</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputIcon}>
            <FontAwesome5 name="envelope" size={20} color="black" />
          </View>
          <TextInput placeholder="Email" style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputIcon}>
            <FontAwesome5 name="lock" size={20} color="black" />
          </View>
          <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputIcon}>
            <FontAwesome5 name="user" size={20} color="black" />
          </View>
          <TextInput placeholder="Full Name" style={styles.input} />
        </View>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
        <View style={styles.buttonSpacing}></View>
        <TouchableOpacity onPress={handleFacebookLogin} style={styles.button}>
          <FontAwesome5 name="facebook" size={20} color="#1877F2" style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>Register with Facebook</Text>
        </TouchableOpacity>
        <View style={styles.buttonSpacing}></View>
        <TouchableOpacity onPress={handleGoogleLogin} style={styles.button}>
          <FontAwesome5 name="google" size={20} color="red" style={styles.socialIcon} />
          <Text style={styles.yellowSocialButtonText}>Register with Google</Text>
        </TouchableOpacity>
        <Text style={styles.termsText}>
          By registering, you confirm that you accepted our <Text style={styles.termsLink}>Terms of use</Text> and <Text style={styles.termsLink}>Privacy</Text>.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '90%', // Use a percentage to make it responsive
    maxWidth: 400,
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  registerButton: {
    width: '100%',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButtonText: {
    color: 'white',
    fontSize: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
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
  buttonSpacing: {
    height: 10,
  },
  termsText: {
    textAlign: 'center',
    marginTop: 10,
    color: 'black',
    fontSize: 14,
  },
  termsLink: {
    color: 'red',
    textDecorationLine: 'underline',
  },
});

export default RegistrationForm;
