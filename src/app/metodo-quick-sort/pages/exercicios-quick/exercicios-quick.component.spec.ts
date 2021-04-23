import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciosQuickComponent } from './exercicios-quick.component';

describe('ExerciciosQuickComponent', () => {
  let component: ExerciciosQuickComponent;
  let fixture: ComponentFixture<ExerciciosQuickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciciosQuickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciciosQuickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
