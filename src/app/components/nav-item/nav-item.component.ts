import { Component, HostBinding, Input, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { RouteItem } from '../../core-items/route-item';
import { NavItemAnimation } from './nav-item.animations';
import { NavigationService } from '../../core-services/navigation.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from '../../auth/auth.service';

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

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private authService: AuthService,
    public navigationService: NavigationService,
    public router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  onItemSelected(item: RouteItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.path]);
      if (this.mobileQuery.matches) {
        this.navigationService.toggle();
      }
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }

  logAnimation($event) {
    console.log(`animation ${$event.phaseName}`);
  }

}
