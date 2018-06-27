import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'd-restaurant-frontend-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() sourceCodeUrl: string;
  @Input() nav;
  constructor() {}

  ngOnInit() {}

  toggleSideNav() {
    this.nav.toggle();
  }
}
