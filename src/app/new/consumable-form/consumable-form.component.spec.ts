import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumableFormComponent } from './consumable-form.component';

describe('ConsumableFormComponent', () => {
  let component: ConsumableFormComponent;
  let fixture: ComponentFixture<ConsumableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumableFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
