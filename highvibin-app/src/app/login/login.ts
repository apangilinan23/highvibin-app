import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private readonly router: Router) {}

  email = '';
  password = '';
  message = '';

  onSubmit(): void {
    if (!this.email || !this.password) {
      this.message = 'Please enter both email and password.';
      return;
    }

    const username = this.email.split('@')[0]?.trim() || this.email.trim();
    this.message = '';
    void this.router.navigate(['/candles'], {
      queryParams: { username },
    });
  }
}
