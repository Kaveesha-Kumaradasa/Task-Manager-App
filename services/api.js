import axios from 'axios';

const API_BASE_URL = 'https://60a21a08745cd70017576014.mockapi.io/api/v1';

export const getTasks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/todo`);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const getTask = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/todo/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching task:', error);
    throw error;
  }
};

export const createTask = async (task) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/todo`, task);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export const updateTask = async (id, task) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/todo/${id}`, task);
    return response.data;
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/todo/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};