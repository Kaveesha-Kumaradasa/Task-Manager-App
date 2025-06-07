import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getTasks, updateTask } from '../services/api';
import TaskItem from '../components/TaskItem';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/styles';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const tasksData = await getTasks();
      setTasks(tasksData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setLoading(false);
    }
  };

  const handleToggleComplete = async (id, completed) => {
    try {
      await updateTask(id, { completed });
      fetchTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const navigateToTaskDetails = (task) => {
    navigation.navigate('TaskDetails', { task });
  };

  const navigateToAddTask = () => {
    navigation.navigate('AddTask');
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading tasks...</Text>
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      
      {/*<StatusBar backgroundColor="#6200EE" barStyle="light-content" />*/}
      
      {/*<View style={styles.appHeader}>
        <Text style={styles.headerTitle}>My Tasks</Text>
      </View>*/}
      
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onPress={() => navigateToTaskDetails(item)}
            onToggleComplete={handleToggleComplete}
          />
        )}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No tasks found</Text>
            <Text style={styles.emptySubText}>Tap the + button to add a new task</Text>
          </View>
        }
      />
      
      <TouchableOpacity 
        style={styles.fab} 
        onPress={navigateToAddTask}
      >
        <Ionicons name="add" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default TaskList;