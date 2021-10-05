import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVetorOrdenadoComponent } from './modal-vetor-ordenado.component';

describe('ModalVetorOrdenadoComponent', () => {
  let component: ModalVetorOrdenadoComponent;
  let fixture: ComponentFixture<ModalVetorOrdenadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalVetorOrdenadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVetorOrdenadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
