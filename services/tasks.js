import api from './api';

export const getTasks = () => api.get('/todo');
export const getTask = (id) => api.get(`/todo/${id}`);
export const createTask = (task) => api.post('/todo', task);
export const updateTask = (id, task) => api.put(`/todo/${id}`, task);
export const deleteTask = (id) => api.delete(`/todo/${id}`);