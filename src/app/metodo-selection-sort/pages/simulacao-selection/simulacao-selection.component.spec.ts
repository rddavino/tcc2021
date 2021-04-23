import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacaoSelectionComponent } from './simulacao-selection.component';

describe('SimulacaoSelectionComponent', () => {
  let component: SimulacaoSelectionComponent;
  let fixture: ComponentFixture<SimulacaoSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulacaoSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulacaoSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
