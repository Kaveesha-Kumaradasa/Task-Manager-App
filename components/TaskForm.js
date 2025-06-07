import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

const TaskForm = ({ task, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const [dueDate, setDueDate] = useState(task ? task.dueDate : '');

  const handleSubmit = () => {
    const taskData = {
      title,
      description,
      dueDate,
      completed: task ? task.completed : false
    };
    onSubmit(taskData);
  };

  return (
    <View>
      <Text style={styles.header}>{task ? 'Edit Task' : 'Add New Task'}</Text>
      
      <Text>Task Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter task title"
      />
      
      <Text>Description</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter task description"
        multiline
      />
      
      <Text>Due Date</Text>
      <TextInput
        style={styles.input}
        value={dueDate}
        onChangeText={setDueDate}
        placeholder="mm/dd/yyyy"
      />
      
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>{task ? 'Save Changes' : 'Create Task'}</Text>
      </TouchableOpacity>
      
      {onCancel && (
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: '#ccc' }]} 
          onPress={onCancel}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TaskForm;