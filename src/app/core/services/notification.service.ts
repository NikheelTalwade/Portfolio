import { Injectable, signal } from '@angular/core';

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly storageKey = 'portfolio-notifications';
  private readonly notificationsSignal = signal<NotificationItem[]>([]);

  readonly notifications = this.notificationsSignal.asReadonly();

  constructor() {
    this.notificationsSignal.set(this.loadFromStorage());
  }

  get unreadCount(): number {
    return this.notificationsSignal().filter((notification) => !notification.read).length;
  }

  get unreadNotifications(): NotificationItem[] {
    return this.notificationsSignal().filter((notification) => !notification.read);
  }

  addNotification(title: string, message: string): void {
    const nextItem: NotificationItem = {
      id: `${title.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`,
      title,
      message,
      read: false,
      createdAt: new Date().toISOString()
    };

    this.updateItems((items) => [nextItem, ...items]);
  }

  markAllAsRead(): void {
    this.updateItems((items) => items.map((item) => ({ ...item, read: true })));
  }

  markAsRead(id: string): void {
    this.updateItems((items) => items.map((item) => (item.id === id ? { ...item, read: true } : item)));
  }

  dismiss(id: string): void {
    this.updateItems((items) => items.filter((item) => item.id !== id));
  }

  private loadFromStorage(): NotificationItem[] {
    if (typeof window === 'undefined') {
      return this.getDefaultNotifications();
    }

    const storedValue = window.localStorage.getItem(this.storageKey);
    if (!storedValue) {
      const defaults = this.getDefaultNotifications();
      this.persist(defaults);
      return defaults;
    }

    try {
      return JSON.parse(storedValue) as NotificationItem[];
    } catch {
      return this.getDefaultNotifications();
    }
  }

  private updateItems(updater: (items: NotificationItem[]) => NotificationItem[]): void {
    this.notificationsSignal.update((items) => {
      const nextItems = updater(items);
      this.persist(nextItems);
      return nextItems;
    });
  }

  private persist(items: NotificationItem[]): void {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(this.storageKey, JSON.stringify(items));
    }
  }

  private getDefaultNotifications(): NotificationItem[] {
    return [
      {
        id: 'welcome',
        title: 'Portfolio updated',
        message: 'Your latest experience and projects are now highlighted on the site.',
        read: false,
        createdAt: new Date().toISOString()
      },
      {
        id: 'contact-ready',
        title: 'Contact is ready',
        message: 'Visitors can now send a message and see a success summary instantly.',
        read: false,
        createdAt: new Date().toISOString()
      }
    ];
  }
}
