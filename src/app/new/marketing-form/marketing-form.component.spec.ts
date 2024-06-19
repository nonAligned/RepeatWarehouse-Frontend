import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingFormComponent } from './marketing-form.component';

describe('MarketingFormComponent', () => {
  let component: MarketingFormComponent;
  let fixture: ComponentFixture<MarketingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
