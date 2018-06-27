import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrestaurantOrderComponent } from './drestaurant-order.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DrestaurantUiModule } from '@d-restaurant-frontend/drestaurant-ui';

describe('DrestaurantOrderComponent', () => {
  let component: DrestaurantOrderComponent;
  let fixture: ComponentFixture<DrestaurantOrderComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DrestaurantOrderComponent],
        imports: [RouterTestingModule, DrestaurantUiModule]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DrestaurantOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
