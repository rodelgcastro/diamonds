import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { VERSION } from '@angular/material';

import { Observable, BehaviorSubject } from 'rxjs';
// import { AuthService } from '../auth/auth.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { RouteItem } from '../../core-items/route-item';
import { RouteService } from '../../core-services/route-item.service';
import { AuthService } from '../../auth/auth.service';

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
  @ViewChild('appDrawer') appDrawer: ElementRef;
  // version = VERSION;
  routeItems: RouteItem[];
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private routeService: RouteService,
    private authService: AuthService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.routeItems = ROUTES.filter(item => item);
  }

  ngAfterViewInit() {
    this.routeService.appDrawer = this.appDrawer;
  }

  // mobileQuery: MediaQueryList;
  // items: any[];

  // private _mobileQueryListener: () => void;

  // constructor(
  //   private authService: AuthService,
  //   changeDetectorRef: ChangeDetectorRef,
  //   media: MediaMatcher
  // ) {
  //   this.mobileQuery = media.matchMedia('(max-width: 600px)');
  //   this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  //   this.mobileQuery.addListener(this._mobileQueryListener);
  // }

  // ngOnInit() {
  //   this.items = ROUTES.filter(item => item);
  // }

  // onLogout() {
  //   this.authService.logout();
  // }

}
