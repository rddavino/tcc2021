import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCartaComponent } from './card-carta.component';

describe('CardCartaComponent', () => {
  let component: CardCartaComponent;
  let fixture: ComponentFixture<CardCartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCartaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
