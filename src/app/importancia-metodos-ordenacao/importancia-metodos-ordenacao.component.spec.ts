import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportanciaMetodosOrdenacaoComponent } from './importancia-metodos-ordenacao.component';

describe('ImportanciaMetodosOrdenacaoComponent', () => {
  let component: ImportanciaMetodosOrdenacaoComponent;
  let fixture: ComponentFixture<ImportanciaMetodosOrdenacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportanciaMetodosOrdenacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportanciaMetodosOrdenacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
