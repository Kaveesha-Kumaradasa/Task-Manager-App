import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/styles';
import { updateTask, deleteTask } from '../services/api';

const TaskDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { task: initialTask, refreshList } = route.params; // Get refreshList from params
  const [task, setTask] = useState(initialTask);

  const handleToggleComplete = async () => {
    try {
      const updatedTask = await updateTask(task.id, { 
        ...task, 
        completed: !task.completed 
      });
      setTask(updatedTask);
      
      // Call refreshList if it exists to update the TaskList
      if (refreshList) {
        refreshList();
      }
    } catch (error) {
      console.error('Error updating task:', error);
      Alert.alert('Error', 'Failed to update task status');
    }
  };

  const handleEdit = () => {
    navigation.navigate('EditTask', { 
      task,
      refreshList: () => {
        // This will refresh both TaskDetails and TaskList when returning from EditTask
        if (refreshList) refreshList();
        navigation.navigate('TaskDetails', { 
          task: {...task},
          refreshList 
        });
      }
    });
  };

  const handleDelete = () => {
    Alert.alert(
      'Delete Task',
      'Are you sure you want to delete this task? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          onPress: () => {
            deleteTask(task.id)
              .then(() => {
                if (refreshList) {
                  refreshList(); // Refresh the task list
                }
                navigation.goBack();
              })
              .catch(error => {
                console.error('Error deleting task:', error);
                Alert.alert('Error', 'Failed to delete task');
              });
          }, 
          style: 'destructive' 
        },
      ]
    );
  };

  return (
    <View style={styles.detailsContainer}>
      <View style={styles.detailsCard}>
        <View style={[
          styles.statusBadge, 
          task.completed ? styles.completedBadge : styles.pendingBadge
        ]}>
          <Text style={[
            styles.statusText,
            task.completed ? styles.completedText : styles.pendingText
          ]}>
            {task.completed ? 'Completed' : 'Pending'}
          </Text>
        </View>

        <Text style={styles.detailsTitle}>{task.title}</Text>

        <View style={styles.detailSection}>
          <Text style={styles.detailLabel}>DESCRIPTION</Text>
          <Text style={styles.detailValue}>{task.description}</Text>
        </View>

        <TouchableOpacity 
          style={[
            styles.actionButton,
            task.completed ? styles.secondaryAction : styles.primaryAction
          ]}
          onPress={handleToggleComplete}
        >
          <Text style={[
            styles.actionButtonText,
            task.completed ? styles.secondaryButtonText : styles.primaryButtonText
          ]}>
            {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
          </Text>
        </TouchableOpacity>

        <View style={styles.actionButtonRow}>
          <TouchableOpacity 
            style={[styles.actionButton, styles.secondaryAction]}
            onPress={handleEdit}
          >
            <Text style={[styles.actionButtonText, styles.secondaryButtonText]}>
              <Ionicons name="create-outline" size={16} /> Edit
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.actionButton, styles.dangerAction]}
            onPress={handleDelete}
          >
            <Text style={[styles.actionButtonText, styles.dangerButtonText]}>
              <Ionicons name="trash-outline" size={16} /> Delete
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TaskDetails;