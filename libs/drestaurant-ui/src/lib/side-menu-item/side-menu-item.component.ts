import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'd-restaurant-frontend-side-menu-item',
  templateUrl: './side-menu-item.component.html',
  styleUrls: ['./side-menu-item.component.scss']
})
export class SideMenuItemComponent implements OnInit {
  @Input() primaryTitle: string;
  @Input() secondaryTitle: string;
  @Input() icon: string;
  @Input() routerLinkUrl: string;
  @Input() nav;
  constructor() {}

  ngOnInit() {}

  closeSideNav() {
    this.nav.close();
  }
}
