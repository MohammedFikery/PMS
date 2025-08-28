/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProjectsApisService } from './projectsApis.service';

describe('Service: ProjectsApis', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectsApisService]
    });
  });

  it('should ...', inject([ProjectsApisService], (service: ProjectsApisService) => {
    expect(service).toBeTruthy();
  }));
});
