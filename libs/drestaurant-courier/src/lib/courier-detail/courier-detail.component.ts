import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourierModel, DrestaurantCourierService } from '@d-restaurant-frontend/drestaurant-shared';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'd-restaurant-frontend-courier-detail',
  templateUrl: './courier-detail.component.html',
  styleUrls: ['./courier-detail.component.scss']
})
export class CourierDetailComponent implements OnInit {
  courier$: Observable<CourierModel>;

  constructor(
    private route: ActivatedRoute,
    private courierService: DrestaurantCourierService
  ) {}

  ngOnInit() {
    this.courier$ = this.route.params
      .map(params => params['id'])
      .switchMap(id => this.courierService.getCourier(id));
  }
}
