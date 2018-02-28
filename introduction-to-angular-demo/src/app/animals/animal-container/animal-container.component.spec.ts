import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalContainerComponent } from '../animal-container.component';

describe('AnimalContainerComponent', () => {
  let component: AnimalContainerComponent;
  let fixture: ComponentFixture<AnimalContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
