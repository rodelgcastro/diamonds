import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { NavigationService } from '../../core-services/navigation.service';
import { TopNavAnimation } from './topnav.animations';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
  animations: [TopNavAnimation]
})
export class TopnavComponent implements OnInit {

  @ViewChild('header') header: string;


  icon: string;
  mobileQuery: MediaQueryList;  

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public navigationService: NavigationService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.navigationService.header = this.header;
  }

}
