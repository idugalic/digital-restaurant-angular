import { async, TestBed } from '@angular/core/testing';
import { DrestaurantCustomerModule } from './drestaurant-customer.module';

describe('DrestaurantCustomerModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [DrestaurantCustomerModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(DrestaurantCustomerModule).toBeDefined();
  });
});
