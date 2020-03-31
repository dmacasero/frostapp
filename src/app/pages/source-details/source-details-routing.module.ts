import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SourceDetailsPage } from './source-details.page';

const routes: Routes = [
  {
    path: '',
    component: SourceDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SourceDetailsPageRoutingModule {}
