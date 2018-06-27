import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDetailComponent } from './restaurant-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { DrestaurantUiModule } from '@d-restaurant-frontend/drestaurant-ui';

describe('RestaurantDetailComponent', () => {
  let component: RestaurantDetailComponent;
  let fixture: ComponentFixture<RestaurantDetailComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [RestaurantDetailComponent],
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
    fixture = TestBed.createComponent(RestaurantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
