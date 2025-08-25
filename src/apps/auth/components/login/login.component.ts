import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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
    private toastr: ToastrService,
    private _Router: Router
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
        this.toastr.success('Login success', 'Success!');
        this._Router.navigate(['/dashboard']);
        this._AuthService.email = this.loginForm.value.email;
      },
      error: (err) => {
        this.toastr.error('Login failed', 'Error!');
        console.error('Login error:', err);
      },
    });
  }
}
