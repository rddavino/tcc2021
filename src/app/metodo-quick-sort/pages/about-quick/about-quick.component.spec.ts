import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutQuickComponent } from './about-quick.component';

describe('AboutQuickComponent', () => {
  let component: AboutQuickComponent;
  let fixture: ComponentFixture<AboutQuickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutQuickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutQuickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
