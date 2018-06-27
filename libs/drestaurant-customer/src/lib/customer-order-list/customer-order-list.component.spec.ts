import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderListComponent } from './customer-order-list.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CustomerOrderListComponent', () => {
  let component: CustomerOrderListComponent;
  let fixture: ComponentFixture<CustomerOrderListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [CustomerOrderListComponent],
        imports: [RouterTestingModule]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
