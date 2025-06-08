import React from 'react';
import { useNavigation } from '@react-navigation/native';
import TaskForm from '../components/TaskForm';
import { createTask } from '../services/api';

const AddTask = ({ route }) => {
  const navigation = useNavigation();
  const { refreshList } = route.params || {};

  const handleSubmit = async (taskData) => {
    try {
      await createTask(taskData);
      if (refreshList) refreshList(); // Refresh the task list
      navigation.goBack();
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return <TaskForm onSubmit={handleSubmit} onCancel={() => navigation.goBack()} />;
};

export default AddTask;