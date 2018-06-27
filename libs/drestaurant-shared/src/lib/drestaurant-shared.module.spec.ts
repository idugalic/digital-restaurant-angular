import { async, TestBed } from '@angular/core/testing';
import { DrestaurantSharedModule } from './drestaurant-shared.module';

describe('DrestaurantSharedModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [DrestaurantSharedModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(DrestaurantSharedModule).toBeDefined();
  });
});
