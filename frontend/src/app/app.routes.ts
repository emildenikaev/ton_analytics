import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  { 
    path: 'upload', 
    loadChildren: () => import('./pages/upload/upload.module').then(m => m.UploadModule),
  },
];
