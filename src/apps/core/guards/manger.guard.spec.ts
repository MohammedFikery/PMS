import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { mangerGuard } from './manger.guard';

describe('mangerGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => mangerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
