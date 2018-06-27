import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierOrderMarkAsDeliveredComponent } from './courier-order-mark-as-delivered.component';

describe('CourierOrderMarkAsDeliveredComponent', () => {
  let component: CourierOrderMarkAsDeliveredComponent;
  let fixture: ComponentFixture<CourierOrderMarkAsDeliveredComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [CourierOrderMarkAsDeliveredComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierOrderMarkAsDeliveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
