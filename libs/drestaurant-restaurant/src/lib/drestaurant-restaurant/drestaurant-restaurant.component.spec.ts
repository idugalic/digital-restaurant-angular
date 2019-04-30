import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrestaurantRestaurantComponent } from './drestaurant-restaurant.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DrestaurantUiModule } from '@d-restaurant-frontend/drestaurant-ui';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {StompRService, StompService} from "@stomp/ng2-stompjs";

describe('DrestaurantRestaurantComponent', () => {
  let component: DrestaurantRestaurantComponent;
  let fixture: ComponentFixture<DrestaurantRestaurantComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DrestaurantRestaurantComponent],
        imports: [HttpClientTestingModule, RouterTestingModule, DrestaurantUiModule],
        providers: [
          {
            provide: 'baseURL',
            useValue: 'baseURL'
          },
          {
            provide: StompService,
            useClass: StompRService
          }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DrestaurantRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
