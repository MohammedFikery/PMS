import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from '../../services/shared.service';
import { environment } from 'src/apps/core/environments/environments';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.currentUser.unsubscribe;
  }
  private currentUser!: Subscription;
  ngOnInit(): void {
    this.getCurrentUser();
  }
  username: string = localStorage.getItem('userName') ?? 'User';
  imagePath: string = '';
  userMail: string = '';
  private readonly _SharedService = inject(SharedService);
  private readonly Router = inject(Router);
  getCurrentUser() {
    this.currentUser = this._SharedService.getCurrentUser().subscribe({
      next: (res) => {
        this.username = res.userName;
        this.userMail = res.email;
        this.imagePath = `${environment.ServerUrl}${res.imagePath}`;
      },
    });
  }
  logOut() {
    localStorage.clear();
    this.Router.navigate(['/auth/login']);
  }
}
