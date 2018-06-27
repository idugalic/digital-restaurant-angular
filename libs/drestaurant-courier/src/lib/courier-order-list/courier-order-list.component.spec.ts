import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierOrderListComponent } from './courier-order-list.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CourierOrderListComponent', () => {
  let component: CourierOrderListComponent;
  let fixture: ComponentFixture<CourierOrderListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [CourierOrderListComponent],
        imports: [RouterTestingModule]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
