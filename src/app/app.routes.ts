import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedBooksCarouselComponent } from './shared/shared-books-carousel/shared-books-carousel.component';

export const routes: Routes = [
  {
    path: '',
    component: SharedBooksCarouselComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];
