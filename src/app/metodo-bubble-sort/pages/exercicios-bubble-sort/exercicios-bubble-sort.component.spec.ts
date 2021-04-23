import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciosBubbleSortComponent } from './exercicios-bubble-sort.component';

describe('ExerciciosBubbleSortComponent', () => {
  let component: ExerciciosBubbleSortComponent;
  let fixture: ComponentFixture<ExerciciosBubbleSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciciosBubbleSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciciosBubbleSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
