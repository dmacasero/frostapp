import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { SourceDetailsPage } from '../source-details/source-details.page';
import { SourceDetailsRoutingKeys } from '../source-details/souce-details.routing.keys';

const routes: Routes = [
  {
    path: '',
    children: [
        {
            path: '',
            component: HomePage,
            pathMatch: 'full',
        },
        {
            path: `:${SourceDetailsRoutingKeys.BASE}`,
            component: SourceDetailsPage,
            pathMatch: 'full',
        },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
