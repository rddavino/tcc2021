import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSimulacaoComponent } from './header-simulacao.component';

describe('HeaderSimulacaoComponent', () => {
  let component: HeaderSimulacaoComponent;
  let fixture: ComponentFixture<HeaderSimulacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSimulacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSimulacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
