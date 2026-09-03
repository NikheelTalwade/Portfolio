import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SeoService } from '../../core/services/seo.service';
import { NotificationService } from '../../core/services/notification.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';

interface ContactFormValue {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, MatSnackBarModule, SectionHeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="card contact-grid">
      <div>
        <app-section-header eyebrow="Contact" title="Let’s build something meaningful" description="I am open to product, engineering, and consulting opportunities that value quality and execution." />
        <form [formGroup]="contactForm" (ngSubmit)="submitForm()" novalidate>
          <label for="name">Name</label>
          <input id="name" formControlName="name" type="text" />
          @if (contactForm.get('name')?.invalid && contactForm.get('name')?.touched) {
            <p class="error">Name is required.</p>
          }

          <label for="email">Email</label>
          <input id="email" formControlName="email" type="email" />
          @if (contactForm.get('email')?.invalid && contactForm.get('email')?.touched) {
            <p class="error">Please enter a valid email.</p>
          }

          <label for="subject">Subject</label>
          <input id="subject" formControlName="subject" type="text" />
          @if (contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched) {
            <p class="error">Subject is required.</p>
          }

          <label for="message">Message</label>
          <textarea id="message" formControlName="message" rows="6"></textarea>
          @if (contactForm.get('message')?.invalid && contactForm.get('message')?.touched) {
            <p class="error">Message is required.</p>
          }

          <button type="submit" class="btn btn-primary" [disabled]="contactForm.invalid">Send Message</button>
        </form>
        @if (submitted()) {
          <p class="success" role="status">Thanks! Your message was received.</p>
        }
      </div>
      <div class="contact-card">
        <h3>Get in touch</h3>
        <p>{{ profile.email }}</p>
        <p>{{ profile.phone }}</p>
        <p>{{ profile.location }}</p>
      </div>
    </section>
  `,
  styles: `
    .contact-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 1.5rem; padding: 2rem; }
    form { display: grid; gap: 0.7rem; margin-top: 1rem; }
    label { font-weight: 700; color: var(--text-primary); }
    input, textarea { width: 100%; padding: 0.8rem 0.9rem; border-radius: 0.9rem; border: 1px solid var(--border-color); background: var(--surface-2); color: var(--text-primary); transition: border-color 0.2s ease, box-shadow 0.2s ease; }
    input:focus, textarea:focus { outline: none; border-color: color-mix(in srgb, var(--accent-primary) 40%, var(--border-color)); box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent-primary) 16%, transparent); }
    .error { color: #ff6b6b; margin: 0; font-size: 0.9rem; }
    .success { color: #5ee7a2; margin-top: 0.8rem; font-weight: 700; }
    .submitted-details { margin-top: 0.8rem; padding: 0.9rem 1rem; border: 1px solid var(--border-color); border-radius: 0.95rem; background: color-mix(in srgb, var(--surface-2) 92%, transparent); }
    .submitted-details h4 { margin: 0 0 0.5rem; color: var(--text-primary); }
    .submitted-details p { margin: 0.3rem 0; color: var(--text-secondary); line-height: 1.6; }
    .btn { padding: 0.8rem 1.1rem; border-radius: 999px; border: 0; font-weight: 700; cursor: pointer; margin-top: 0.2rem; transition: transform 0.2s ease, box-shadow 0.2s ease; }
    .btn:disabled { opacity: 0.65; cursor: not-allowed; transform: none; box-shadow: none; }
    .btn:hover { transform: translateY(-2px); }
    .btn-primary { background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); color: white; box-shadow: 0 10px 25px rgba(221, 0, 49, 0.25); }
    .contact-card { background: var(--surface-2); border: 1px solid var(--border-color); border-radius: 1.25rem; padding: 1.25rem; box-shadow: var(--shadow-soft); }
    .contact-card h3 { margin-top: 0; color: var(--text-primary); }
    .contact-card p { color: var(--text-secondary); line-height: 1.7; margin: 0.35rem 0; }
    @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; } }
  `
})
export class ContactComponent implements OnInit {
  readonly portfolioData = inject(PortfolioDataService);
  readonly seo = inject(SeoService);
  readonly notifications = inject(NotificationService);
  private readonly snackBar = inject(MatSnackBar);

  protected readonly profile = this.portfolioData.profile;
  protected readonly submitted = signal(false);
  protected readonly submittedDetails = signal<ContactFormValue | null>(null);

  contactForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    subject: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    message: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });

  ngOnInit(): void {
    this.seo.updatePage({
      title: 'Contact',
      description: 'Contact Nikheel Talwade for engineering, consulting, or product opportunities.'
    });
  }

  submitForm(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    const formValue: ContactFormValue = this.contactForm.getRawValue();
    console.info('Contact form submitted', formValue);
    const detailsMessage = [
      `Name: ${formValue.name}`,
      `Email: ${formValue.email}`,
      `Subject: ${formValue.subject}`,
      `Message: ${formValue.message}`
    ].join('\n');
    this.notifications.addNotification('Message received', detailsMessage);
    this.submitted.set(true);
    this.submittedDetails.set(formValue);
    this.contactForm.reset();
    this.snackBar.open('Thanks! Your message was received.', 'Close', {
      duration: 3500,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['contact-snackbar']
    });
  }
}
