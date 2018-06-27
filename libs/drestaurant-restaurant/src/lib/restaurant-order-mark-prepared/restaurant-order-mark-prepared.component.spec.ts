import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantOrderMarkPreparedComponent } from './restaurant-order-mark-prepared.component';

describe('RestaurantOrderMarkPreparedComponent', () => {
  let component: RestaurantOrderMarkPreparedComponent;
  let fixture: ComponentFixture<RestaurantOrderMarkPreparedComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [RestaurantOrderMarkPreparedComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantOrderMarkPreparedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
