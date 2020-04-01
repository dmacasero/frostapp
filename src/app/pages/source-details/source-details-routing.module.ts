import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SourceDetailsPage } from "./source-details.page";
import { SourceDetailsRoutingKeys } from "./souce-details.routing.keys";

const routes: Routes = [
  {
    path: `:${SourceDetailsRoutingKeys.PARAM_SOURCE}`,
    children: [
      {
        path: "",
        component: SourceDetailsPage,
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SourceDetailsPageRoutingModule {}
