import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderDetailComponent } from './customer-order-detail.component';

describe('CustomerOrderDetailComponent', () => {
  let component: CustomerOrderDetailComponent;
  let fixture: ComponentFixture<CustomerOrderDetailComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [CustomerOrderDetailComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
