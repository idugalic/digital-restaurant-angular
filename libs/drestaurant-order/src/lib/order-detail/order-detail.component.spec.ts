import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailComponent } from './order-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { DrestaurantUiModule } from '@d-restaurant-frontend/drestaurant-ui';

describe('OrderDetailComponent', () => {
  let component: OrderDetailComponent;
  let fixture: ComponentFixture<OrderDetailComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [OrderDetailComponent],
        imports: [RouterTestingModule, HttpClientModule, DrestaurantUiModule],
        providers: [
          {
            provide: 'baseURL',
            useValue: 'baseURL'
          }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
