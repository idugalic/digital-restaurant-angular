import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DrestaurantCourierService, CourierModel, EventManager, MyEvent } from '@d-restaurant-frontend/drestaurant-shared';

@Component({
  selector: 'd-restaurant-frontend-courier-create',
  templateUrl: './courier-create.component.html',
  styleUrls: ['./courier-create.component.scss']
})
export class CourierCreateComponent implements OnInit {
  form: FormGroup;

  constructor(private courierService: DrestaurantCourierService, private formBuilder: FormBuilder, private eventManager: EventManager) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      maxNumberOfActiveOrders: [10, Validators.compose([Validators.required, Validators.min(1), Validators.max(1000)])]
    });
  }

  onSubmit({ value, valid }: { value: CourierModel; valid: boolean }) {
    this.courierService
      .createCourier(value)
      .subscribe(
        response => this.onSaveSuccess(response),
        () => this.onSaveError()
      );
  }

  private onSaveSuccess(result) {
    this.eventManager.broadcast({
      name: MyEvent.COURIER_LIST_MODIFICATION,
      content: 'OK'
    });
  }

  private onSaveError() {
    //Do something smart
  }
}
