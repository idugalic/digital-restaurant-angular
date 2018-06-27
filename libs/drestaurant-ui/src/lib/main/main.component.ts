import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'd-restaurant-frontend-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() title: string;
  @Input() subTitle: string;
  constructor() {}

  ngOnInit() {}
}
