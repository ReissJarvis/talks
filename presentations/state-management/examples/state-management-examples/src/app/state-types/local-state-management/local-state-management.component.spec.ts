import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalStateManagementComponent } from './local-state-management.component';

describe('LocalStateManagementComponent', () => {
  let component: LocalStateManagementComponent;
  let fixture: ComponentFixture<LocalStateManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalStateManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalStateManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
