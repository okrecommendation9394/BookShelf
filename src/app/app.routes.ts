import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedBooksCarouselComponent } from './shared/shared-books-carousel/shared-books-carousel.component';
import { AnonymGuard } from './guards/anonym.guard';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: SharedBooksCarouselComponent,
    canActivate: [AnonymGuard],
  },
  {
    path: 'dashboard',
    component: MainPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];
