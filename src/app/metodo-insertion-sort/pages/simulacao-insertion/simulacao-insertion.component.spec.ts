import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacaoInsertionComponent } from './simulacao-insertion.component';

describe('SimulacaoInsertionComponent', () => {
  let component: SimulacaoInsertionComponent;
  let fixture: ComponentFixture<SimulacaoInsertionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulacaoInsertionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulacaoInsertionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
