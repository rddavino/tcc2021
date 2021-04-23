import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCriarSequenciaComponent } from './modal-criar-sequencia.component';

describe('ModalCriarSequenciaComponent', () => {
  let component: ModalCriarSequenciaComponent;
  let fixture: ComponentFixture<ModalCriarSequenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCriarSequenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCriarSequenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
