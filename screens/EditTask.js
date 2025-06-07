import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import TaskForm from '../components/TaskForm';
import { updateTask } from '../services/api';

const EditTask = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { task } = route.params;

  const handleSubmit = async (taskData) => {
    try {
      await updateTask(task.id, taskData);
      navigation.goBack();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return <TaskForm task={task} onSubmit={handleSubmit} onCancel={() => navigation.goBack()} />;
};

export default EditTask;