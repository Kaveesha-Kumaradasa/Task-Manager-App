import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/styles';

const TaskItem = ({ task, onPress, onToggleComplete }) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[
        styles.taskItem,
        task.completed && styles.completedTaskItem
      ]}
    >
      <View style={styles.checkboxContainer}>
        <TouchableOpacity 
          style={[
            styles.checkbox,
            task.completed && styles.checkboxChecked
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
              styles.taskTitle,
              task.completed && styles.completedText
            ]}
          >
            {task.title}
          </Text>
          {task.description && (
            <Text 
              style={[
                styles.taskDescription,
                task.completed && styles.completedText
              ]}
              numberOfLines={2}
            >
              {task.description}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskItem;