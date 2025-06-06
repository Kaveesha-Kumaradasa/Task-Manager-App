import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { TaskContext } from '../context/TaskContext';
import { globalStyles } from '../styles/globalStyles';

export default function AddTaskModal({ visible, onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleSubmit = async () => {
    if (title.trim()) {
      await addTask({ title, description });
      setTitle('');
      setDescription('');
      onClose();
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={globalStyles.modalContainer}>
        <View style={globalStyles.modalContent}>
          <Text style={globalStyles.modalTitle}>Add New Task</Text>
          
          <TextInput
            style={globalStyles.input}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
          />
          
          <TextInput
            style={[globalStyles.input, { height: 100 }]}
            multiline
            placeholder="Description (optional)"
            value={description}
            onChangeText={setDescription}
          />
          
          <View style={globalStyles.buttonRow}>
            <TouchableOpacity style={globalStyles.button} onPress={handleSubmit}>
              <Text style={globalStyles.buttonText}>Add Task</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[globalStyles.button, { backgroundColor: '#ccc' }]} 
              onPress={onClose}
            >
              <Text style={globalStyles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}