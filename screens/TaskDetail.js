import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { deleteTask, updateTask } from '../services/api';
import { styles } from '../styles/styles';

const TaskDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { task: initialTask } = route.params;
  const [task, setTask] = useState(initialTask);

  const handleToggleComplete = async () => {
    try {
      const updatedTask = await updateTask(task.id, { 
        ...task, 
        completed: !task.completed 
      });
      setTask(updatedTask);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleEdit = () => {
    navigation.navigate('EditTask', { task });
  };

  const handleDelete = () => {
    Alert.alert(
      'Delete Task',
      'Are you sure you want to delete this task? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: confirmDelete, style: 'destructive' },
      ]
    );
  };

  const confirmDelete = async () => {
    try {
      await deleteTask(task.id);
      navigation.goBack();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>{task.title}</Text>
        
        <Text style={styles.detailsLabel}>Due Date</Text>
        <Text>{task.dueDate}</Text>
        
        <Text style={styles.detailsLabel}>Description</Text>
        <Text>{task.description}</Text>
        
        <View style={styles.checkboxContainer}>
          <TouchableOpacity 
            style={[styles.checkbox, task.completed && styles.checkboxChecked]}
            onPress={handleToggleComplete}
          />
          <Text style={styles.checkboxText}>
            {task.completed ? 'Completed' : 'Mark as completed'}
          </Text>
        </View>
        
        <View style={styles.actionButtons}>
          <TouchableOpacity 
            style={[styles.button, styles.actionButton]}
            onPress={handleEdit}
          >
            <Text style={styles.buttonText}>Edit Task</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.actionButton, styles.deleteButton]}
            onPress={handleDelete}
          >
            <Text style={styles.buttonText}>Delete Task</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TaskDetails;