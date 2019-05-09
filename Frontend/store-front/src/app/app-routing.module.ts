import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';
import { MyAccountComponent } from '../app/components/my-account/my-account.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';


const routes: Routes = [
  {
    path : '',
    redirectTo : '/home',
    pathMatch : 'full'
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'myAccount',
    component : MyAccountComponent
  },
  {
    path : 'myProfile',
    component : MyProfileComponent
  },
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);

