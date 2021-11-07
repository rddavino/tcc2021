import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicaoMetodosOrdenacaoComponent } from './definicao-metodos-ordenacao.component';

describe('DefinicaoMetodosOrdenacaoComponent', () => {
  let component: DefinicaoMetodosOrdenacaoComponent;
  let fixture: ComponentFixture<DefinicaoMetodosOrdenacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinicaoMetodosOrdenacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinicaoMetodosOrdenacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
