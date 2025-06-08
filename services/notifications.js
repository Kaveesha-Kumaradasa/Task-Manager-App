import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Platform } from 'react-native';

// Configure notification handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

// Request permissions (call this when app starts)
export async function registerForPushNotifications() {
  if (!Device.isDevice) return;

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    alert('Failed to get push token for push notification!');
    return;
  }

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
}

// Schedule a notification for a task
export async function scheduleTaskNotification(task) {
  if (!task.dueDate) return;

  const notificationId = await Notifications.scheduleNotificationAsync({
    content: {
      title: `Task Due: ${task.title}`,
      body: task.description || 'Your task is due now!',
      data: { taskId: task.id },
      sound: 'default',
    },
    trigger: {
      date: new Date(task.dueDate),
    },
  });

  return notificationId;
}

// Cancel a scheduled notification
export async function cancelTaskNotification(notificationId) {
  await Notifications.cancelScheduledNotificationAsync(notificationId);
}

// Get all pending notifications
export async function getPendingNotifications() {
  return await Notifications.getAllScheduledNotificationsAsync();
}