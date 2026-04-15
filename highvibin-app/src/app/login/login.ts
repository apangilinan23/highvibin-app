import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';
  message = '';

  onSubmit(): void {
    if (!this.email || !this.password) {
      this.message = 'Please enter both email and password.';
      return;
    }

    this.message = `Welcome to High Vibin, ${this.email}!`;
  }
}
