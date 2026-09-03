import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="toolbar-actions">
      <div class="notification-wrapper">
        <button class="icon-button notification-button" type="button" aria-label="Notifications" (click)="toggleNotifications()">
          <span>🔔</span>
          @if (notificationService.unreadCount > 0) {
            <span class="badge">{{ notificationService.unreadCount }}</span>
          }
        </button>

        @if (showNotifications()) {
          <div class="notification-panel" role="dialog" aria-label="Notifications">
            <div class="notification-header">
              <strong>Notifications</strong>
              <button type="button" class="panel-close" (click)="closeNotifications()">Close</button>
            </div>
            @if (notificationService.notifications().length === 0) {
              <p class="empty-state">No new notifications.</p>
            } @else {
              <ul>
                @for (item of notificationService.notifications(); track item.id) {
                  <li [class.unread]="!item.read">
                    <div class="notification-item">
                      <div>
                        <strong>{{ item.title }}</strong>
                        <p>{{ item.message }}</p>
                      </div>
                      <div class="notification-actions">
                        @if (!item.read) {
                          <button type="button" (click)="markAsRead(item.id)">Read</button>
                        }
                        <button type="button" (click)="dismiss(item.id)">✕</button>
                      </div>
                    </div>
                  </li>
                }
              </ul>
            }
          </div>
        }
      </div>

      <button class="icon-button theme-toggle" type="button" (click)="toggleTheme()" [attr.aria-label]="themeService.isDark() ? 'Switch to light mode' : 'Switch to dark mode'">
        <span>{{ themeService.isDark() ? '☀️' : '🌙' }}</span>
      </button>
    </div>
  `,
  styles: `
    :host { display: inline-flex; }
    .toolbar-actions { display: inline-flex; align-items: center; gap: 0.6rem; position: relative; }
    .notification-wrapper { position: relative; }
    .icon-button {
      position: relative;
      border: 1px solid var(--border-color);
      background: var(--surface-2);
      color: var(--text-primary);
      border-radius: 999px;
      padding: 0.65rem 0.95rem;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
    }
    .icon-button:hover {
      transform: translateY(-1px);
      border-color: color-mix(in srgb, var(--accent-primary) 35%, var(--border-color));
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
    }
    .badge {
      position: absolute;
      top: -0.25rem;
      right: -0.15rem;
      min-width: 1.1rem;
      height: 1.1rem;
      display: grid;
      place-items: center;
      padding: 0 0.25rem;
      border-radius: 999px;
      background: var(--accent-primary);
      color: white;
      font-size: 0.7rem;
      font-weight: 700;
    }
    .notification-panel {
      position: absolute;
      top: calc(100% + 0.55rem);
      right: 0;
      width: min(22rem, 85vw);
      max-height: min(24rem, 70vh);
      overflow-y: auto;
      background: var(--surface-2);
      border: 1px solid var(--border-color);
      border-radius: 1rem;
      box-shadow: var(--shadow-soft);
      padding: 0.75rem;
      z-index: 30;
      scrollbar-width: thin;
    }
    .notification-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.6rem;
    }
    .panel-close, .notification-actions button {
      border: 0;
      background: transparent;
      color: var(--accent-secondary);
      cursor: pointer;
      font-weight: 700;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      gap: 0.5rem;
    }
    .notification-panel::-webkit-scrollbar {
      width: 6px;
    }
    .notification-panel::-webkit-scrollbar-thumb {
      background: color-mix(in srgb, var(--accent-primary) 25%, var(--border-color));
      border-radius: 999px;
    }
    li {
      border-radius: 0.8rem;
      background: color-mix(in srgb, var(--surface-1) 88%, transparent);
      padding: 0.6rem;
    }
    li.unread {
      border: 1px solid color-mix(in srgb, var(--accent-primary) 24%, var(--border-color));
    }
    .notification-item {
      display: flex;
      justify-content: space-between;
      gap: 0.7rem;
      align-items: flex-start;
    }
    .notification-item p {
      margin: 0.25rem 0 0;
      color: var(--text-secondary);
      font-size: 0.9rem;
      line-height: 1.5;
    }
    .notification-actions {
      display: flex;
      gap: 0.4rem;
      align-items: center;
      flex-shrink: 0;
    }
    .empty-state {
      margin: 0;
      color: var(--text-secondary);
      font-size: 0.95rem;
    }
  `
})
export class ThemeToggleComponent {
  readonly themeService = inject(ThemeService);
  readonly notificationService = inject(NotificationService);
  readonly showNotifications = signal(false);

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleNotifications(): void {
    this.showNotifications.update((value) => !value);
  }

  closeNotifications(): void {
    this.showNotifications.set(false);
  }

  markAsRead(id: string): void {
    this.notificationService.markAsRead(id);
  }

  dismiss(id: string): void {
    this.notificationService.dismiss(id);
  }
}
