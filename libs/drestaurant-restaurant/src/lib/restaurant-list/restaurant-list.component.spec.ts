import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantListComponent } from './restaurant-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { DrestaurantUiModule } from '@d-restaurant-frontend/drestaurant-ui';

describe('RestaurantListComponent', () => {
  let component: RestaurantListComponent;
  let fixture: ComponentFixture<RestaurantListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [RestaurantListComponent],
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
    fixture = TestBed.createComponent(RestaurantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
