import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PickupCallsPage } from './pickup-call.page';

describe('PickupCallsPage', () => {
  let component: PickupCallsPage;
  let fixture: ComponentFixture<PickupCallsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupCallsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
