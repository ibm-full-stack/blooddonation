import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodDonationRegComponent } from './blood-donation-reg.component';

describe('BloodDonationRegComponent', () => {
  let component: BloodDonationRegComponent;
  let fixture: ComponentFixture<BloodDonationRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodDonationRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodDonationRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
