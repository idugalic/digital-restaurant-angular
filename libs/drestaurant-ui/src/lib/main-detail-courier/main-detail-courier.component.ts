import { Component, OnInit, Input } from '@angular/core';
import { CourierModel } from '@d-restaurant-frontend/drestaurant-shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'd-restaurant-frontend-main-detail-courier',
  templateUrl: './main-detail-courier.component.html',
  styleUrls: ['./main-detail-courier.component.scss']
})
export class MainDetailCourierComponent implements OnInit {
  @Input() courierObservable: Observable<CourierModel>;
  constructor() { }
  ngOnInit() { }
}
