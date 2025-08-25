import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

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
    private toastr: ToastrService,
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
        this.toastr.success('verify success!', 'success!');
        this._Router.navigate(['/auth/login']);
      },
    });
  }
}
