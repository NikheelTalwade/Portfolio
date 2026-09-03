import { beforeEach, describe, expect, it } from 'vitest';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    const storage = new Map<string, string>();
    Object.defineProperty(globalThis, 'window', {
      value: {
        localStorage: {
          getItem: (key: string) => storage.get(key) ?? null,
          setItem: (key: string, value: string) => storage.set(key, value),
          removeItem: (key: string) => storage.delete(key),
          clear: () => storage.clear()
        }
      },
      configurable: true
    });
    service = new NotificationService();
  });

  it('adds a new unread notification when requested', () => {
    service.addNotification('Contact received', 'Your message was successfully submitted.');

    expect(service.notifications().length).toBe(3);
    expect(service.unreadCount).toBe(3);
    expect(service.notifications()[0].title).toBe('Contact received');
  });
});
