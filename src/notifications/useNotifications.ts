// TODO: Add push notifications support later
import { useEffect, useState } from 'react';
import { notificationService } from './NotificationService';
import type { Notification } from 'expo-notifications';

interface UseNotificationsOptions {
  onTap?: (notification: Notification) => void;
  enablePush?: boolean;
}

// React hook that initializes the notification service on mount.
// Returns the service instance and the push token (if push was requested).
// Pass onTap to handle what happens when the user taps a notification.
export function useNotifications(options: UseNotificationsOptions = {}) {
  const [pushToken, setPushToken] = useState<string | null>(null);

  useEffect(() => {
    notificationService.initialize(options.enablePush ?? false).then(() => {
      setPushToken(notificationService.getExpoPushToken());
    })

    const unsub = options.onTap
      ? notificationService.onNotificationTapped(options.onTap)
      : undefined;

    return () => unsub?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { service: notificationService, pushToken };
}