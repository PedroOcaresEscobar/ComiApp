import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () => import('./main/main.page').then((m) => m.MainPage),
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'recetas',
    loadChildren: () => import('./recetas-module/recetas-module.module').then( m => m.RecetasModuleModule)
  },
  {
    path: 'mis-recetas',
    loadChildren: () => import('./misrecetas-module/misrecetas-module.module').then( m => m.MisRecetasPageModule)
  },
  {
    path: 'mis-evaluaciones',
    loadComponent: () => import('./mis-evaluaciones/mis-evaluaciones.page').then( m => m.MisEvaluacionesPage)
  },
  {
    path: 'restaurantes-cercanos',
    loadComponent: () => import('./restaurantes-cercanos/restaurantes-cercanos.page').then( m => m.RestaurantesCercanosPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./regitro/register/register.page').then( m => m.RegisterPage)
  },
  
];

