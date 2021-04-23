import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciosInsertionComponent } from './exercicios-insertion.component';

describe('ExerciciosInsertionComponent', () => {
  let component: ExerciciosInsertionComponent;
  let fixture: ComponentFixture<ExerciciosInsertionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciciosInsertionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciciosInsertionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
