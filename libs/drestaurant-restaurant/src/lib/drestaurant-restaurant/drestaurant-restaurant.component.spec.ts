import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrestaurantRestaurantComponent } from './drestaurant-restaurant.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DrestaurantUiModule } from '@d-restaurant-frontend/drestaurant-ui';

describe('DrestaurantRestaurantComponent', () => {
  let component: DrestaurantRestaurantComponent;
  let fixture: ComponentFixture<DrestaurantRestaurantComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DrestaurantRestaurantComponent],
        imports: [RouterTestingModule, DrestaurantUiModule]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DrestaurantRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
