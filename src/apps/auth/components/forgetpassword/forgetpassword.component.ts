import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private _snackBar: MatSnackBar,
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
        this._snackBar.open(' successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['success-snackbar'],
        });
        this._Router.navigate(['/auth/resetPassword']);
        this._AuthService.email = this.forgotForm.value.email;
      },
    });
  }
}
