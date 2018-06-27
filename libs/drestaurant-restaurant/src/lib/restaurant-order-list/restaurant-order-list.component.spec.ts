import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantOrderListComponent } from './restaurant-order-list.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RestaurantOrderListComponent', () => {
  let component: RestaurantOrderListComponent;
  let fixture: ComponentFixture<RestaurantOrderListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [RestaurantOrderListComponent],
        imports: [RouterTestingModule]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
