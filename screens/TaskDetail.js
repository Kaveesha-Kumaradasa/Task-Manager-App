import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native'; // Added TextInput here
import { TaskContext } from '../context/TaskContext';
import { globalStyles } from '../styles/globalStyles';

export default function TaskDetail({ route, navigation }) {
  const { task } = route.params;
  const { editTask, removeTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleSave = async () => {
    await editTask(task.id, editedTask);
    setIsEditing(false);
    navigation.goBack();
  };

  const handleDelete = async () => {
    await removeTask(task.id);
    navigation.goBack();
  };

  return (
    <ScrollView style={globalStyles.container}>
      <View style={globalStyles.card}>
        {isEditing ? (
          <>
            <TextInput
              style={globalStyles.input}
              value={editedTask.title}
              onChangeText={(text) => setEditedTask({...editedTask, title: text})}
            />
            <TextInput
              style={[globalStyles.input, { height: 100 }]}
              multiline
              value={editedTask.description}
              onChangeText={(text) => setEditedTask({...editedTask, description: text})}
            />
          </>
        ) : (
          <>
            <Text style={globalStyles.title}>{task.title}</Text>
            <Text style={globalStyles.description}>{task.description}</Text>
          </>
        )}
        
        <View style={globalStyles.buttonRow}>
          {isEditing ? (
            <TouchableOpacity style={globalStyles.button} onPress={handleSave}>
              <Text style={globalStyles.buttonText}>Save</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={globalStyles.button} onPress={() => setIsEditing(true)}>
              <Text style={globalStyles.buttonText}>Edit</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={globalStyles.deleteButton} onPress={handleDelete}>
            <Text style={globalStyles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}