import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierListComponent } from './courier-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { DrestaurantUiModule } from '@d-restaurant-frontend/drestaurant-ui';
import { StompService, StompConfig, StompRService } from '@stomp/ng2-stompjs';

describe('CourierListComponent', () => {
  let component: CourierListComponent;
  let fixture: ComponentFixture<CourierListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [CourierListComponent],
        imports: [RouterTestingModule, HttpClientModule, DrestaurantUiModule],
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
    fixture = TestBed.createComponent(CourierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
