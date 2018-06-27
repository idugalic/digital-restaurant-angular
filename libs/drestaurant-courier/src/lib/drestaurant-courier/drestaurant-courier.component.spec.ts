import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrestaurantCourierComponent } from './drestaurant-courier.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DrestaurantUiModule } from '@d-restaurant-frontend/drestaurant-ui';

describe('DrestaurantCourierComponent', () => {
  let component: DrestaurantCourierComponent;
  let fixture: ComponentFixture<DrestaurantCourierComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DrestaurantCourierComponent],
        imports: [RouterTestingModule, DrestaurantUiModule]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DrestaurantCourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
