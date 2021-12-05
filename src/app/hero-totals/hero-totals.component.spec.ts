import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTotalsComponent } from './hero-totals.component';

describe('HeroTotalsComponent', () => {
  let component: HeroTotalsComponent;
  let fixture: ComponentFixture<HeroTotalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroTotalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
