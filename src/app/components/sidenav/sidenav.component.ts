import { Component, OnInit, ChangeDetectorRef, HostBinding } from '@angular/core';

// import { AuthService } from '../auth/auth.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { RouteItem } from '../../core-items/route-item';
import { AuthService } from '../../auth/auth.service';
import { NavigationService } from '../../core-services/navigation.service';

export const ROUTES: RouteItem[] = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    path: 'dashboard'
  },

  {
    title: 'Cooperative',
    icon: 'donut_small',
    children: [
      { title: 'Members', icon: 'people', path: 'cooperative/members' },
      { title: 'Contributions', icon: 'local_atm', path: 'cooperative/contributions' },
      { title: 'Cycles', icon: '360', path: 'cooperative/cycles' }]
  },

  {
    title: 'Business',
    icon: 'business_center',
    children: [
      { title: 'Lending', icon: 'money', path: 'business/lending' }]
  }
];

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  //
  routeItems: RouteItem[];
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private authService: AuthService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.routeItems = ROUTES.filter(item => item);
  }

}
