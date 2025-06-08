import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/styles';

const TaskForm = ({ onSubmit, onCancel, task }) => {
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');

  const handleSubmit = () => {
    const taskData = {
      title,
      description,
      completed: task?.completed || false
    };
    onSubmit(taskData);
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.formGroup}>
        <Text style={styles.inputLabel}>Task Title</Text>
        <TextInput
          style={styles.taskInput}
          value={title}
          onChangeText={setTitle}
          placeholder="Enter task title"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.inputLabel}>Description</Text>
        <TextInput
          style={[styles.taskInput, styles.descriptionInput]}
          value={description}
          onChangeText={setDescription}
          placeholder="Enter task description"
          multiline
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.cancelButton]} 
          onPress={onCancel}
        >
          <Text style={[styles.buttonText, styles.cancelButtonText]}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.submitButton]} 
          onPress={handleSubmit}
        >
          <Text style={[styles.buttonText, styles.submitButtonText]}>
            {task ? 'Save Changes' : 'Create Task'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskForm;