import { TestBed, inject } from '@angular/core/testing';

import { DrestaurantRestaurantService } from './drestaurant-restaurant.service';
import { HttpClientModule } from '@angular/common/http';

describe('DrestaurantRestaurantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DrestaurantRestaurantService,
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
      [DrestaurantRestaurantService],
      (service: DrestaurantRestaurantService) => {
        expect(service).toBeTruthy();
      }
    )
  );
});
