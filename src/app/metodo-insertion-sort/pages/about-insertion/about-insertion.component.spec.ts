import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInsertionComponent } from './about-insertion.component';

describe('AboutInsertionComponent', () => {
  let component: AboutInsertionComponent;
  let fixture: ComponentFixture<AboutInsertionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutInsertionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutInsertionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
