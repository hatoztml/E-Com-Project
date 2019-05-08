import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';
import { MyAccountComponent } from '../app/components/my-account/my-account.component';


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
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);

