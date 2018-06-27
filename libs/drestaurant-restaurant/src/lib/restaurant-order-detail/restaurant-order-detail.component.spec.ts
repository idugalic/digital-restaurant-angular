import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantOrderDetailComponent } from './restaurant-order-detail.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RestaurantOrderDetailComponent', () => {
  let component: RestaurantOrderDetailComponent;
  let fixture: ComponentFixture<RestaurantOrderDetailComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [RestaurantOrderDetailComponent],
        imports: [RouterTestingModule]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
