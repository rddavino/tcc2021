import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBubbleSortComponent } from './about-bubble-sort.component';

describe('AboutBubbleSortComponent', () => {
  let component: AboutBubbleSortComponent;
  let fixture: ComponentFixture<AboutBubbleSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutBubbleSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBubbleSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
