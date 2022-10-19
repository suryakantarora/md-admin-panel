import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {
    path: '', redirectTo: 'layout', pathMatch: 'full'
  }, {
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }, {
    path: 'signin', 
    loadChildren: () => import('./pre-login/signin/signin.module').then(m => m.SigninModule)
  }, {
    path: 'layout',
    loadChildren: () => import('./pages/pages.module').then(m => PagesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
