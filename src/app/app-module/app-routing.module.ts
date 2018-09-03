import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuard } from '../auth/auth.guard';
import { LoginComponent } from '../login/login.component';
import { LoginLayoutComponent } from '../layout/login-layout.component';
import { HomeLayoutComponent } from '../layout/home-layout.component';
import {
  MembersComponent, 
  ContributionsComponent, 
  CyclesComponent
} from '../cooperative';
import { LendingComponent } from '../business/lending/lending.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        // canActivate: [AuthGuard],
      },
      {
        path: 'cooperative',
        children: [
          {
            path: 'members',
            component: MembersComponent
          },
          {
            path: 'contributions',
            component: ContributionsComponent
          },
          {
            path: 'cycles',
            component: CyclesComponent
          }
        ]
      },
      {
        path: 'business',
        children: [
          {
            path: 'lending',
            component: LendingComponent
          }
        ]
      }
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
