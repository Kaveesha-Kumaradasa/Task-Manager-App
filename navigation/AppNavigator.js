import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TaskDetail from '../screens/TaskDetail';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My Tasks' }} />
      <Stack.Screen name="TaskDetail" component={TaskDetail} options={{ title: 'Task Details' }} />
    </Stack.Navigator>
  );
}