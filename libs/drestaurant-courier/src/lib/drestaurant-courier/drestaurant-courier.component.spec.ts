import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrestaurantCourierComponent } from './drestaurant-courier.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DrestaurantUiModule } from '@d-restaurant-frontend/drestaurant-ui';
import {StompRService, StompService} from "@stomp/ng2-stompjs";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('DrestaurantCourierComponent', () => {
  let component: DrestaurantCourierComponent;
  let fixture: ComponentFixture<DrestaurantCourierComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DrestaurantCourierComponent],
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
    fixture = TestBed.createComponent(DrestaurantCourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
