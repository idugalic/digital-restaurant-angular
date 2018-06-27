import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierOrderAssignToCourierComponent } from './courier-order-assign-to-courier.component';

describe('CourierOrderAssignToCourierComponent', () => {
  let component: CourierOrderAssignToCourierComponent;
  let fixture: ComponentFixture<CourierOrderAssignToCourierComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [CourierOrderAssignToCourierComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierOrderAssignToCourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
