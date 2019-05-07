import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';


const routes: Routes = [
  {
    path : '',
    redirectTo : '/home',
    pathMatch : 'full'
  },
  {
    path : 'home',
    component : HomeComponent
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);

