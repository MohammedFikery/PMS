import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenewaccountComponent } from './createnewaccount.component';

describe('CreatenewaccountComponent', () => {
  let component: CreatenewaccountComponent;
  let fixture: ComponentFixture<CreatenewaccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatenewaccountComponent]
    });
    fixture = TestBed.createComponent(CreatenewaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
