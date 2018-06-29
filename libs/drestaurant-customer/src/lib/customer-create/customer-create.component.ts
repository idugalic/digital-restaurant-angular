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
    this.eventManager.broadcast({
      name: MyEvent.CUSTOMER_LIST_MODIFICATION,
      content: 'OK'
    });
  }

  private onSaveError() {
    //Do something smart
  }
}
