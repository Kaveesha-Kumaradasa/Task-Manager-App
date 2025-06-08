import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import TaskList from './screens/TaskList';
import AddTask from './screens/AddTask';
import TaskDetails from './screens/TaskDetail';
import EditTask from './screens/EditTask';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#00A859',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="TaskList" 
          component={TaskList} 
          options={{ title: 'My Tasks' }} 
        />
        <Stack.Screen 
          name="AddTask" 
          component={AddTask} 
          options={{ title: 'Add Task' }} 
        />
        <Stack.Screen 
          name="TaskDetails" 
          component={TaskDetails} 
          options={{ title: 'Task Details' }} 
        />
        <Stack.Screen 
          name="EditTask" 
          component={EditTask} 
          options={{ title: 'Edit Task' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;