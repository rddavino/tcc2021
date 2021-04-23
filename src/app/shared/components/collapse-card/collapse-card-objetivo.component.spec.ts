import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseCardObjetivoComponent } from './collapse-card-objetivo.component';

describe('CollapseCardComponent', () => {
  let component: CollapseCardObjetivoComponent;
  let fixture: ComponentFixture<CollapseCardObjetivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapseCardObjetivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseCardObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
