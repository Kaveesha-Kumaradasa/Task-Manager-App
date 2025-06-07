import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/styles';

const TaskItem = ({ task, onPress, onToggleComplete }) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[
        styles.enhancedTaskItem,
        task.completed && styles.completedTaskItem
      ]}
    >
      <View style={styles.checkboxContainer}>
        <TouchableOpacity 
          style={[
            styles.enhancedCheckbox,
            task.completed && styles.enhancedCheckboxChecked
          ]}
          onPress={() => onToggleComplete(task.id, !task.completed)}
        >
          {task.completed && (
            <Ionicons name="checkmark" size={16} color="white" />
          )}
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text 
            style={[
              styles.enhancedTaskTitle,
              task.completed && styles.completedText
            ]}
          >
            {task.title}
          </Text>
          {task.description && (
            <Text 
              style={[
                styles.enhancedTaskDescription,
                task.completed && styles.completedText
              ]}
              numberOfLines={2}
            >
              {task.description}
            </Text>
          )}
          {task.dueDate && (
            <Text style={styles.enhancedTaskDueDate}>
              <Ionicons name="calendar" size={12} color="#666" /> {task.dueDate}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskItem;