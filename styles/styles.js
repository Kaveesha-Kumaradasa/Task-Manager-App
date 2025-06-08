import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  // Color palette
  colors: {
    primaryGreen: '#00A859',      // Pantone Green
    secondaryGreen: '#00AF98',    // Munsell Green
    accentGreen: '#00A550',       // CMYK Pigment Green
    lightGreen: '#E8F5E9',        // Light background green
    darkGreen: '#1B5E20',         // Dark green for text
    white: '#FFFFFF',
    lightGray: '#F5F5F5',
    mediumGray: '#E0E0E0',
    darkGray: '#616161',
  },

  // General styles
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9', 
  },
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },


   // Header styles
  appHeader: {
    backgroundColor: '#00A859', 
    paddingVertical: 20,
    paddingHorizontal: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },

  addTaskContainer: {
  flexGrow: 1,
  padding: 20,
  backgroundColor: '#f8f9fa',
},
addTaskHeader: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 30,
},
backIcon: {
  marginRight: 15,
},
addTaskTitle: {
  fontSize: 22,
  fontWeight: '600',
  color: '#333',
},
inputGroup: {
  marginBottom: 20,
},
inputLabel: {
  fontSize: 16,
  fontWeight: '500',
  color: '#444',
  marginBottom: 8,
},
taskInput: {
  backgroundColor: '#fff',
  borderRadius: 8,
  padding: 15,
  fontSize: 16,
  borderWidth: 1,
  borderColor: '#ddd',
  color: '#333',
},
descriptionInput: {
  height: 100,
  textAlignVertical: 'top',
},
buttonGroup: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 20,
},
actionButton: {
  borderRadius: 8,
  paddingVertical: 12,
  paddingHorizontal: 20,
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 120,
},
createButton: {
  backgroundColor: '#4A6FA5',
},
cancelButton: {
  backgroundColor: '#f0f0f0',
  borderWidth: 1,
  borderColor: '#ddd',
},
buttonText: {
  fontSize: 16,
  fontWeight: '500',
},
createButtonText: {
  color: '#fff',
},
cancelButtonText: {
  color: '#666',
},
 

  // Welcome Screen
  welcomeContainer: {
    flex: 1,
    backgroundColor: '#00A859', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  welcomeTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
    textAlign: 'center',
  },
  welcomeSubtitle: {
    fontSize: 18,
    color: '#E0F2F1', 
    marginBottom: 48,
    textAlign: 'center',
  },
  welcomeButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    width: '100%',
  },
  welcomeButtonText: {
    color: '#00A859', 
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },

  // Task List Styles
  mainContainer: {
    flex: 1,
    backgroundColor: '#E8F5E9', 
  },
    listContent: {
    padding: 16,
    paddingBottom: 80,
  },

    emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },

    emptyText: {
    fontSize: 18,
    color: '#1B5E20', 
    marginBottom: 8,
  },
  emptySubText: {
    fontSize: 14,
    color: '#2E7D32', 
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 24,
    backgroundColor: '#00A550',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  sortOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#C8E6C9', 
    borderBottomWidth: 1,
    borderBottomColor: '#A5D6A7', 
  },
  sortOption: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#A5D6A7', 
  },
  activeSortOption: {
    backgroundColor: '#00A859', 
  },
  sortOptionText: {
    fontSize: 14,
    color: '#1B5E20', 
    fontWeight: '500',
  },
  activeSortOptionText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  taskListContainer: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  taskItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  taskDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },

    // Task Item
  taskItem: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#A5D6A7', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  completedTaskItem: {
    opacity: 0.7,
    borderColor: '#81C784', 
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#00A859', 
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#00A859', 
  },
  textContainer: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1B5E20', 
    marginBottom: 4,
  },
  taskDescription: {
    fontSize: 14,
    color: '#2E7D32', 
    marginBottom: 6,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#81C784', 
  },


  // Task Form
  
  formContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E8F5E9', 
  },
  formGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1B5E20', 
    marginBottom: 8,
  },
  taskInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#A5D6A7', 
    color: '#1B5E20', 
  },
  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: '#E8F5E9', 
    borderWidth: 1,
    borderColor: '#A5D6A7', 
  },
  submitButton: {
    backgroundColor: '#00A859', 
  },
  cancelButtonText: {
    color: '#1B5E20', 
  },
  submitButtonText: {
    color: '#FFFFFF',
  },

  // Task Details
  detailsContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E8F5E9',
  },
  detailsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    borderWidth: 2,
    borderColor: '#00A859', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  completedBadge: {
    backgroundColor: '#C8E6C9', 
    borderColor: '#A5D6A7', 
  },
  pendingBadge: {
    backgroundColor: '#FFF9C4', 
    borderWidth: 1,
    borderColor: '#FFEE58', 
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
  },
  completedText: {
    color: '#1B5E20', 
  },
  pendingText: {
    color: '#F57F17', 
  },
  detailsTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1B5E20', 
    marginBottom: 16,
  },
  detailSection: {
    marginBottom: 20,
  },
  detailLabel: {
    fontSize: 14,
    color: '#2E7D32', 
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  detailValue: {
    fontSize: 16,
    color: '#1B5E20', 
  },
  actionButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    gap: 12,
  },
  primaryAction: {
    backgroundColor: '#00A859', 
  },
  secondaryAction: {
    backgroundColor: '#E8F5E9',
    borderWidth: 1,
    borderColor: '#A5D6A7', 
  },
  dangerAction: {
    backgroundColor: '#FFCDD2', 
    borderWidth: 1,
    borderColor: '#EF9A9A',
  },
  buttonText: {
  fontSize: 16,
  fontWeight: '500',
},
  primaryButtonText: {
    color: '#FFFFFF',
  },
  secondaryButtonText: {
    color: '#1B5E20', 
  },
  dangerButtonText: {
    color: '#C62828', 
  },

});