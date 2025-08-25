import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide: boolean = true;

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
    ]),
  });

  constructor(
    private readonly _AuthService: AuthService,
    private _Router: Router,
    private _snackBar: MatSnackBar
  ) {}

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const myData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    this._AuthService.login(myData).subscribe({
      next: (res) => {
        this._snackBar.open('Login successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['success-snackbar'],
        });
        localStorage.setItem('userToken', res.token);
        this._AuthService.getProfile();
        this._Router.navigate(['/dashboard']);
        this._AuthService.email = this.loginForm.value.email;
      },
    });
  }
}
