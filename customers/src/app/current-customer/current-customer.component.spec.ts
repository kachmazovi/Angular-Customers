import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCustomerComponent } from './current-customer.component';

describe('CurrentCustomerComponent', () => {
  let component: CurrentCustomerComponent;
  let fixture: ComponentFixture<CurrentCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
