import React, { createContext, useState, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../services/tasks';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const { data } = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (task) => {
    try {
      const { data } = await createTask(task);
      setTasks([...tasks, data]);
    } catch (error) {
      console.error(error);
    }
  };

  const editTask = async (id, updatedTask) => {
    try {
      const { data } = await updateTask(id, updatedTask);
      setTasks(tasks.map(task => task.id === id ? data : task));
    } catch (error) {
      console.error(error);
    }
  };

  const removeTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, loading, addTask, editTask, removeTask, fetchTasks }}>
      {children}
    </TaskContext.Provider>
  );
};