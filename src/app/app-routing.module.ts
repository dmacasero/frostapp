import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeRoutingKeys } from './pages/home/home-routing.keys';

const routes: Routes = [
  { path: '', redirectTo: HomeRoutingKeys.BASE, pathMatch: 'full' },
  { path: HomeRoutingKeys.BASE, loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
