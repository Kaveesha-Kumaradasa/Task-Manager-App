import React from 'react';
import { TaskProvider } from './context/TaskContext';
import AppNavigator from './navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </TaskProvider>
  );
}