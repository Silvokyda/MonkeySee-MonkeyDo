import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, KeyboardAvoidingView, Animated } from 'react-native';

const App = () => {
  const [handsVisible, setHandsVisible] = useState(true);
  const [slideAnimation] = useState(new Animated.Value(0));

  const closeEye = () => {
    setHandsVisible(false);
    Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const openEye = () => {
    setHandsVisible(true);
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    closeEye(); 
  }, []);

  const handsPosition = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200], 
  });

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Animated.View style={[styles.animcon, { transform: [{ translateY: handsPosition }] }]}>
        {handsVisible && <Image style={styles.hands} source={require('./assets/hands.png')} />}
        <View style={styles.gifContainer}>
          <Image style={[styles.gif, { opacity: handsVisible ? 1 : 0 }]} source={require('./assets/monkey_pwd.gif')} />
          <Image style={[styles.gif1, { opacity: !handsVisible ? 1 : 0 }]} source={require('./assets/monkey.gif')} />
        </View>
      </Animated.View>
      <View style={styles.formcon}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
          onChangeText={(text) => {}}
          onFocus={() => closeEye()}
          onBlur={() => openEye()}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => {}}
          onFocus={() => openEye()}
          onBlur={() => closeEye()}
          
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
    bottom: 250,
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
