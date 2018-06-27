import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrestaurantCustomerComponent } from './drestaurant-customer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DrestaurantUiModule } from '@d-restaurant-frontend/drestaurant-ui';

describe('DrestaurantCustomerComponent', () => {
  let component: DrestaurantCustomerComponent;
  let fixture: ComponentFixture<DrestaurantCustomerComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DrestaurantCustomerComponent],
        imports: [RouterTestingModule, DrestaurantUiModule]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DrestaurantCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
