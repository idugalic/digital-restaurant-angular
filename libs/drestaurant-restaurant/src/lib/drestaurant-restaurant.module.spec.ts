import { async, TestBed } from '@angular/core/testing';
import { DrestaurantRestaurantModule } from './drestaurant-restaurant.module';

describe('DrestaurantRestaurantModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [DrestaurantRestaurantModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(DrestaurantRestaurantModule).toBeDefined();
  });
});
