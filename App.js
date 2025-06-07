import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskList from './screens/TaskList';
import TaskDetails from './screens/TaskDetail';
import AddTask from './screens/AddTask';
import EditTask from './screens/EditTask';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TaskList">
        <Stack.Screen 
          name="TaskList" 
          component={TaskList} 
          options={{ title: 'My Tasks' }} 
        />
        <Stack.Screen 
          name="TaskDetails" 
          component={TaskDetails} 
          options={{ title: 'Task Details' }} 
        />
        <Stack.Screen 
          name="AddTask" 
          component={AddTask} 
          options={{ title: 'Add New Task' }} 
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
