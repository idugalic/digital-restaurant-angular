import { TestBed, inject } from '@angular/core/testing';

import { DrestaurantOrderService } from './drestaurant-order.service';
import { HttpClientModule } from '@angular/common/http';

describe('DrestaurantOrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DrestaurantOrderService,
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
    inject([DrestaurantOrderService], (service: DrestaurantOrderService) => {
      expect(service).toBeTruthy();
    })
  );
});
