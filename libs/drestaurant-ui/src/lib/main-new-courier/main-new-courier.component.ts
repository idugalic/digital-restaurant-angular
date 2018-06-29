import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CourierModel } from '@d-restaurant-frontend/drestaurant-shared';

@Component({
  selector: 'd-restaurant-frontend-main-new-courier',
  templateUrl: './main-new-courier.component.html',
  styleUrls: ['./main-new-courier.component.scss']
})
export class MainNewCourierComponent implements OnInit {
  @Input() form: FormGroup;
  @Output()
  formSubmit: EventEmitter<{
    value: CourierModel;
    valid: boolean;
  }> = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  submit(event) {
    this.formSubmit.emit(event);
  }
}
