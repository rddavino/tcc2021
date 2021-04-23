import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacaoBubbleComponent } from './simulacao-bubble.component';

describe('SimulacaoBubbleComponent', () => {
  let component: SimulacaoBubbleComponent;
  let fixture: ComponentFixture<SimulacaoBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulacaoBubbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulacaoBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
