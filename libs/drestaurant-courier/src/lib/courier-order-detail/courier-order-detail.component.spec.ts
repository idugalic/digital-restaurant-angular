import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierOrderDetailComponent } from './courier-order-detail.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CourierOrderDetailComponent', () => {
  let component: CourierOrderDetailComponent;
  let fixture: ComponentFixture<CourierOrderDetailComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [CourierOrderDetailComponent],
        imports: [RouterTestingModule]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
