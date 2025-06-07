import React from 'react';
import { useNavigation } from '@react-navigation/native';
import TaskForm from '../components/TaskForm';
import { createTask } from '../services/api';

const AddTask = () => {
  const navigation = useNavigation();

  const handleSubmit = async (taskData) => {
    try {
      await createTask(taskData);
      navigation.goBack();
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return <TaskForm onSubmit={handleSubmit} onCancel={() => navigation.goBack()} />;
};

export default AddTask;