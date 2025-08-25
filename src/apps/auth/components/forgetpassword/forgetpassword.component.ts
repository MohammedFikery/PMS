import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss'],
})
export class ForgetpasswordComponent {
  hide: boolean = true;

  forgotForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  constructor(
    private readonly _AuthService: AuthService,
    private toastr: ToastrService,
    private _Router: Router
  ) {}

  forgotPassword() {
    if (this.forgotForm.invalid) {
      this.forgotForm.markAllAsTouched();
      return;
    }

    const myData = {
      email: this.forgotForm.value.email,
    };

    this._AuthService.forgotPassword(myData).subscribe({
      next: (res) => {
        this.toastr.success('success', 'Success!');
        this._Router.navigate(['/auth/resetpassword']);
        this._AuthService.email = this.forgotForm.value.email;
      },
      error: (err) => {
        this.toastr.error('Login failed', 'Error!');
        console.error('Login error:', err);
      },
    });
  }
}
