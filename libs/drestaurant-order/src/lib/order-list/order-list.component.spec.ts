import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListComponent } from './order-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { DrestaurantUiModule } from '@d-restaurant-frontend/drestaurant-ui';

describe('OrderListComponent', () => {
  let component: OrderListComponent;
  let fixture: ComponentFixture<OrderListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [OrderListComponent],
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
    fixture = TestBed.createComponent(OrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
