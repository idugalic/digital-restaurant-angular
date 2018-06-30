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
    // Note that command for creating a Courier (command side) and materializing the CourierEntity (query side - event handler) can happen in different threads (no transaction). We should wait websocket event from the backend marking that view has been materialized. We are 'eventually' consistent, and we have to handle it accordingly.

    // We do not need to fire event here in order for the list to be refreshed
    // because: STOMP message will be sent over the WebSocket protocol once the Courier is saved into the database on the backend side
    // check: 'courier-list.datasource.ts' to see how we subscribe to WebSocket event (Couriers list updated)

    // this.eventManager.broadcast({
    //   name: MyEvent.COURIER_LIST_MODIFICATION,
    //   content: 'OK'
    // });
  }

  private onSaveError() {
    //Do something smart
  }
}
