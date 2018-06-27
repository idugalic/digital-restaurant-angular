import { async, TestBed } from '@angular/core/testing';
import { DrestaurantUiModule } from './drestaurant-ui.module';

describe('DrestaurantUiModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [DrestaurantUiModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(DrestaurantUiModule).toBeDefined();
  });
});
