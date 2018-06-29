import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomerModel } from '@d-restaurant-frontend/drestaurant-shared';

@Component({
  selector: 'd-restaurant-frontend-main-new-customer',
  templateUrl: './main-new-customer.component.html',
  styleUrls: ['./main-new-customer.component.scss']
})
export class MainNewCustomerComponent implements OnInit {
  @Input() form: FormGroup;
  @Output()
  formSubmit: EventEmitter<{
    value: CustomerModel;
    valid: boolean;
  }> = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  submit(event) {
    this.formSubmit.emit(event);
  }
}
