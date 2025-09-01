import { Component, EventEmitter, Input, Output } from '@angular/core';

interface IMenu {
  Title: string;
  icon: string;
  menuLink: string;
  isActive: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() expanded: boolean = false;
  @Output() toggle = new EventEmitter<void>();

  onToggleClick() {
    this.toggle.emit();
  }

  isExpanded = false;

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

  isManager(): boolean {
    return localStorage.getItem('role') === 'Manager' ? true : false;
  }
  isEmployee(): boolean {
    return localStorage.getItem('role') === 'Employee' ? true : false;
  }

  menu: IMenu[] = [
    {
      Title: 'Home',
      icon: 'home',
      menuLink: '/dashboard/home',
      isActive: this.isEmployee() || this.isManager(),
    },
    {
      Title: 'Users',
      icon: 'person',
      menuLink: '/dashboard/manger/Users',
      isActive: this.isManager(),
    },
    {
      Title: 'Projects',
      icon: 'lists',
      menuLink: '/dashboard/manger/projects',
      isActive: this.isManager(),
    },
    {
      Title: 'Projects',
      icon: 'lists',
      menuLink: '/dashboard/employee/projects',
      isActive: this.isEmployee(),
    },
    {
      Title: 'Tasks',
      icon: 'assignment_ind',
      menuLink: '/dashboard/manger/tasks',
      isActive: this.isManager(),
    },
    {
      Title: 'Tasks',
      icon: 'assignment_ind',
      menuLink: '/dashboard/employee/task',
      isActive: this.isEmployee(),
    },
  ];
}
