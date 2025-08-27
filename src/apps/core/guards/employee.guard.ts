import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const employeeGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router);
  if (
    localStorage.getItem('userToken') !== null &&
    localStorage.getItem('role') === 'Employee'
  ) {
    return true;
  }
  _Router.navigate(['/auth']);
  return false;
};
