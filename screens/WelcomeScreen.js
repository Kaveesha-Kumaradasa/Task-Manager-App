import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/styles';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.welcomeContainer}>
    <Image 
        source={require('../assets/taskapp.png')} 
        style={{ width: 120, height: 120, marginBottom: 32 }}
      /> 

      <Text style={styles.welcomeTitle}>Task Manager Pro</Text>
      <Text style={styles.welcomeSubtitle}>
        Organize your tasks efficiently and boost your productivity
      </Text>
      <TouchableOpacity 
        style={styles.welcomeButton}
        onPress={() => navigation.navigate('TaskList')}
      >
        <Text style={styles.welcomeButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;