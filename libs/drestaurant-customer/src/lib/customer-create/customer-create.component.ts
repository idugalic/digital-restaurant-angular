import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DrestaurantCustomerService, CustomerModel, EventManager, MyEvent } from '@d-restaurant-frontend/drestaurant-shared';

@Component({
  selector: 'd-restaurant-frontend-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {
  form: FormGroup;

  constructor(private customerService: DrestaurantCustomerService, private formBuilder: FormBuilder, private eventManager: EventManager) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      orderLimit: [10, Validators.compose([Validators.required, Validators.min(1), Validators.max(1000)])]
    });
  }

  onSubmit({ value, valid }: { value: CustomerModel; valid: boolean }) {
    this.customerService
      .createCustomer(value)
      .subscribe(
        response => this.onSaveSuccess(response),
        () => this.onSaveError()
      );
  }

  private onSaveSuccess(result) {
    // Note that command for creating a Customer (command side) and materializing the CustomerEntity (query side - event handler) can happen in different threads (no transaction). We should wait websocket event from the backend marking that view has been materialized. We are 'eventually' consistent, and we have to handle it accordingly.

    // We do not need to fire event here in order for the list to be refreshed
    // because: STOMP message will be sent over the WebSocket protocol once the Customer is saved into the database on the backend side
    // check: 'customer-list.datasource.ts' to see how we subscribe to WebSocket event (Customers list updated)

    // this.eventManager.broadcast({
    //   name: MyEvent.CUSTOMER_LIST_MODIFICATION,
    //   content: 'OK'
    // });
  }

  private onSaveError() {
    //Do something smart
  }
}
