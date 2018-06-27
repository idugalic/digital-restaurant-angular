import { async, TestBed } from '@angular/core/testing';
import { DrestaurantOrderModule } from './drestaurant-order.module';

describe('DrestaurantOrderModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [DrestaurantOrderModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(DrestaurantOrderModule).toBeDefined();
  });
});
