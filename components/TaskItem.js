import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function TaskItem({ task, onPress, onDelete }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={globalStyles.taskItem}>
        <View style={{ flex: 1 }}>
          <Text style={globalStyles.taskTitle}>{task.title}</Text>
          {task.description && (
            <Text style={globalStyles.taskDescription} numberOfLines={1}>
              {task.description}
            </Text>
          )}
        </View>
        <TouchableOpacity onPress={onDelete} style={globalStyles.deleteIcon}>
          <Text style={{ color: 'red' }}>✕</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}