import { async, TestBed } from '@angular/core/testing';
import { DrestaurantCourierModule } from './drestaurant-courier.module';

describe('DrestaurantCourierModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [DrestaurantCourierModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(DrestaurantCourierModule).toBeDefined();
  });
});
