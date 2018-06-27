import { TestBed, inject } from '@angular/core/testing';

import { DrestaurantCourierService } from './drestaurant-courier.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('DrestaurantCourierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DrestaurantCourierService,
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
      [DrestaurantCourierService],
      (service: DrestaurantCourierService) => {
        expect(service).toBeTruthy();
      }
    )
  );
});
