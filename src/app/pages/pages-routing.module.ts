import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from './layout/layout.module';

const routes: Routes = [
  {
    path: '', redirectTo: 'grid', pathMatch: 'full'
  }, {
    path: 'grid',
    loadChildren: () => import('./layout/layout.module').then(m => LayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
