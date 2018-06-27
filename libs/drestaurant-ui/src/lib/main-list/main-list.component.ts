import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'd-restaurant-frontend-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit {
  @Input() title: string;
  constructor() {}

  ngOnInit() {}
}
