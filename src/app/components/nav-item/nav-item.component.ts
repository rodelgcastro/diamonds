import { Component, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RouteItem } from '../../core-items/route-item';
import { NavItemAnimation } from './nav-item.animations';
import { NavigationService } from '../../core-services/navigation.service';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
  animations: [NavItemAnimation]
})
export class NavItemComponent {
  @Input() item: RouteItem;
  @Input() depth: number;

  expanded: boolean;

  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;

  constructor(
    public navigationService: NavigationService,
    public router: Router
  ) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  onItemSelected(item: RouteItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.path]);
      this.navigationService.header = item.title.toUpperCase();
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }

  logAnimation($event) {
    console.log(`animation ${$event.phaseName}`);
  }

}
