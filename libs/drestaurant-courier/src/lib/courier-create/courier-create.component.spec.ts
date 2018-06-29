import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierCreateComponent } from './courier-create.component';
import { DrestaurantUiModule } from '@d-restaurant-frontend/drestaurant-ui';
import { HttpClientModule } from '@angular/common/http';

describe('CourierCreateComponent', () => {
  let component: CourierCreateComponent;
  let fixture: ComponentFixture<CourierCreateComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [CourierCreateComponent],
        imports: [HttpClientModule, DrestaurantUiModule],
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
    fixture = TestBed.createComponent(CourierCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
