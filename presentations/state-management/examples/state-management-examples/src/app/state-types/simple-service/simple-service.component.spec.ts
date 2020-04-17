import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleServiceComponent } from './simple-service.component';

describe('SimpleServiceComponent', () => {
  let component: SimpleServiceComponent;
  let fixture: ComponentFixture<SimpleServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
