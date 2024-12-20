import { Routes } from '@angular/router';
import { SharedBooksCarouselComponent } from './shared/shared-books-carousel/shared-books-carousel.component';
import { AnonymGuard } from './guards/anonym.guard';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AuthGuard } from './guards/auth.guard';
import { BookDescriptionComponent } from './shared/book-description/book-description.component';

export const routes: Routes = [
  {
    path: '',
    component: SharedBooksCarouselComponent,
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: MainPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard/booklist/:id/:uid',
    component: SharedBooksCarouselComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard/book/:id/:uid',
    component: BookDescriptionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'book/:id',
    component: BookDescriptionComponent,
    canActivate: [AnonymGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];
