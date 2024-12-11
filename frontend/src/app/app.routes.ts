import { Routes } from '@angular/router';
import { AccountDetailComponent } from './pages/account-detail/account-detail.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },

  {
    path: 'account/:address',
    loadChildren: () => import('./pages/account-detail/account-detail.module').then(m => m.AccountDetailModule),
  },
];
