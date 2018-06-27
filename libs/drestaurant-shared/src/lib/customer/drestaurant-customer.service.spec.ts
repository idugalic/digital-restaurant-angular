import { TestBed, inject } from '@angular/core/testing';

import { DrestaurantCustomerService } from './drestaurant-customer.service';
import { HttpClientModule } from '@angular/common/http';

describe('DrestaurantCustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DrestaurantCustomerService,
        {
          provide: 'baseURL',
          useValue: 'baseURL'
        }
      ],
      imports: [HttpClientModule]
    });
  });

  it(
    'should be created',
    inject(
      [DrestaurantCustomerService],
      (service: DrestaurantCustomerService) => {
        expect(service).toBeTruthy();
      }
    )
  );
});
