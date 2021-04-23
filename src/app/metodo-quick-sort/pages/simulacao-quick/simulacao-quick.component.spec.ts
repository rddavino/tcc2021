import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacaoQuickComponent } from './simulacao-quick.component';

describe('SimulacaoQuickComponent', () => {
  let component: SimulacaoQuickComponent;
  let fixture: ComponentFixture<SimulacaoQuickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulacaoQuickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulacaoQuickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
