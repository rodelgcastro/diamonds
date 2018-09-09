import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-module/app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './app-module/app-material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginLayoutComponent } from './layout/login-layout.component';
import { LoginComponent } from './login/login.component';
import { HomeLayoutComponent } from './layout/home-layout.component';
import {
  SidenavComponent,
  NavItemComponent,
  TopnavComponent
} from './components';
import { DashboardComponent } from './dashboard/dashboard.component';
import {
  MembersComponent,
  CyclesComponent,
  ContributionsComponent
} from './cooperative';
import { LendingComponent } from './business';

import { ProfileComponent } from './profile/profile.component';
import { NavigationService } from './core-services/navigation.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,
    LoginComponent,
    HomeLayoutComponent,
    SidenavComponent,
    NavItemComponent,
    DashboardComponent,
    TopnavComponent,
    ProfileComponent,
    MembersComponent,
    CyclesComponent,
    ContributionsComponent,
    LendingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgbModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
