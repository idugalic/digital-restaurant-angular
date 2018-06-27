import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierCreateComponent } from './courier-create.component';

describe('CourierCreateComponent', () => {
  let component: CourierCreateComponent;
  let fixture: ComponentFixture<CourierCreateComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [CourierCreateComponent]
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
