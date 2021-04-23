import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciosSelectionComponent } from './exercicios-selection.component';

describe('ExerciciosSelectionComponent', () => {
  let component: ExerciciosSelectionComponent;
  let fixture: ComponentFixture<ExerciciosSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciciosSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciciosSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
