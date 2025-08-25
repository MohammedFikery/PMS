import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-verifyaccount',
  templateUrl: './verifyaccount.component.html',
  styleUrls: ['./verifyaccount.component.scss'],
})
export class VerifyaccountComponent implements OnInit {
  verifyAccount = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    code: new FormControl(null, [Validators.required]),
  });

  constructor(
    private readonly _AuthApisService: AuthService,
    private _snackBar: MatSnackBar,
    private _Router: Router
  ) {}
  ngOnInit(): void {
    this.verifyAccount.get('email')?.patchValue(this._AuthApisService.email);
  }

  verifyNewAccount() {
    if (this.verifyAccount.invalid) {
      this.verifyAccount.markAllAsTouched();
      return;
    }

    const data = this.verifyAccount.value;

    this._AuthApisService.verify(data).subscribe({
      next: (res) => {
        this._snackBar.open('verify success!', 'Close', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['success-snackbar'],
        });
        this._Router.navigate(['/auth/login']);
      },
    });
  }
}
