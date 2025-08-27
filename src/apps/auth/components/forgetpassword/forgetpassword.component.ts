import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    private _Router: Router,
    private _ToastrService:ToastrService
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
        this._ToastrService.info('Otp Has  been send to your email')
        this._Router.navigate(['/auth/resetPassword']);
        this._AuthService.email = this.forgotForm.value.email;
      },
    });
  }
}
