import React, { useContext, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { TaskContext } from '../context/TaskContext';
import TaskItem from '../components/TaskItem';
import AddTaskModal from '../components/AddTaskModal';
import { globalStyles } from '../styles/globalStyles';

export default function HomeScreen({ navigation }) {
  const { tasks, loading, removeTask } = useContext(TaskContext);
  const [modalVisible, setModalVisible] = useState(false);

  if (loading) {
    return (
      <View style={globalStyles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <AddTaskModal visible={modalVisible} onClose={() => setModalVisible(false)} />
      
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem 
            task={item} 
            onPress={() => navigation.navigate('TaskDetail', { task: item })}
            onDelete={() => removeTask(item.id)}
          />
        )}
        ListEmptyComponent={
          <Text style={globalStyles.emptyText}>No tasks found. Add a new task!</Text>
        }
      />
      
      <TouchableOpacity 
        style={globalStyles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={globalStyles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}