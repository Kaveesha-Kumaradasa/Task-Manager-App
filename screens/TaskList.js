import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getTasks, updateTask } from '../services/api';
import TaskItem from '../components/TaskItem';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/styles';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState('all'); // 'all', 'new', 'completed', 'pending'
  const navigation = useNavigation();

  // Fetch tasks from API
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

  // Refresh task list
  const refreshTasks = async () => {
    setLoading(true);
    try {
      const tasksData = await getTasks();
      setTasks(tasksData);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  // Sort and filter tasks based on selected option
  const getFilteredTasks = () => {
    switch (sortOption) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'pending':
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  };

  const handleToggleComplete = async (id, completed) => {
    try {
      await updateTask(id, { completed });
      refreshTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const navigateToTaskDetails = (task) => {
    navigation.navigate('TaskDetails', { 
      task,
      refreshList: refreshTasks
    });
  };

  const navigateToAddTask = () => {
    navigation.navigate('AddTask', { refreshList: refreshTasks });
  };

  useEffect(() => {
    refreshTasks();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading tasks...</Text>
      </View>
    );
  }


  return (
    <View style={styles.mainContainer}>
      {/* Sorting Options */}
      <View style={styles.sortOptionsContainer}>
        <TouchableOpacity 
          style={[styles.sortOption, sortOption === 'all' && styles.activeSortOption]}
          onPress={() => setSortOption('all')}
        >
          <Text style={[styles.sortOptionText, sortOption === 'all' && styles.activeSortOptionText]}>
            All
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.sortOption, sortOption === 'completed' && styles.activeSortOption]}
          onPress={() => setSortOption('completed')}
        >
          <Text style={[styles.sortOptionText, sortOption === 'completed' && styles.activeSortOptionText]}>
            Completed
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.sortOption, sortOption === 'pending' && styles.activeSortOption]}
          onPress={() => setSortOption('pending')}
        >
          <Text style={[styles.sortOptionText, sortOption === 'pending' && styles.activeSortOptionText]}>
            Pending
          </Text>
        </TouchableOpacity>
      </View>

      {/* Task List */}
      <FlatList
        data={getFilteredTasks()}
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
      
      {/* Add Task Button */}
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