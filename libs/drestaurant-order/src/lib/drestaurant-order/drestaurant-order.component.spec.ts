import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrestaurantOrderComponent } from './drestaurant-order.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DrestaurantUiModule } from '@d-restaurant-frontend/drestaurant-ui';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {StompRService, StompService} from "@stomp/ng2-stompjs";

describe('DrestaurantOrderComponent', () => {
  let component: DrestaurantOrderComponent;
  let fixture: ComponentFixture<DrestaurantOrderComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DrestaurantOrderComponent],
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
    fixture = TestBed.createComponent(DrestaurantOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
