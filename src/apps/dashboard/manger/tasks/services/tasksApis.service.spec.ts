/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TasksApisService } from './tasksApis.service';

describe('Service: TasksApis', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TasksApisService]
    });
  });

  it('should ...', inject([TasksApisService], (service: TasksApisService) => {
    expect(service).toBeTruthy();
  }));
});
