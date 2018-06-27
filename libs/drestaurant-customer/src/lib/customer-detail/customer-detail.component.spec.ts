import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailComponent } from './customer-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { DrestaurantUiModule } from '@d-restaurant-frontend/drestaurant-ui';

describe('CustomerDetailComponent', () => {
  let component: CustomerDetailComponent;
  let fixture: ComponentFixture<CustomerDetailComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [CustomerDetailComponent],
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
    fixture = TestBed.createComponent(CustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
