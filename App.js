import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';

const App = () => {
  const [handsStyle, setHandsStyle] = useState({ display: 'flex' });

  const closeEye = () => {
    setHandsStyle({ display: 'flex' });
  };

  const openEye = () => {
    setHandsStyle({ display: 'none' });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.animcon}>
        <Image style={[styles.hands, handsStyle]} source={require('./assets/hands.png')} />
        <View style={styles.gifContainer}>
          <Image style={[styles.gif, { opacity: handsStyle.display === 'flex' ? 1 : 0 }]} source={require('./assets/monkey_pwd.gif')} />
          <Image style={[styles.gif1, { opacity: handsStyle.display === 'none' ? 1 : 0 }]} source={require('./assets/monkey.gif')} />
        </View>
      </View>
      <View style={styles.formcon}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
          onChangeText={(text) => {}}
          onFocus={() => openEye()}
          onBlur={() => closeEye()}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => {}}
          onFocus={() => closeEye()}
          onBlur={() => openEye()}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    position: 'relative',
  },
  animcon: {
    position: 'absolute',
    alignItems: 'center',
    top: 80,
  },
  hands: {
    position: 'absolute',
    width: 200,
    height: 200,
    zIndex: 2,
  },
  gifContainer: {
    zIndex: 1,
  },
  gif1: {
    width: 200,
    bottom: 200,
  },
  gif: {
    width: 200,
    height: 200,
  },
  formcon: {
    position: 'absolute',
    width: '80%',
    top: 400,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 45,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
    alignSelf: 'center',
    width: '40%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
