import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { NotFountComponent } from './not-fount/not-fount.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
@NgModule({
  declarations: [
    SharedComponent,
    NotFountComponent,
    SidebarComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterLink,
    RouterModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatCardModule,
    NgxDropzoneModule,
    MatSnackBarModule,
    MatIconModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatCardModule,
    NgxDropzoneModule,
    MatSnackBarModule,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    MatIconModule
  ],
})
export class SharedModule {}
