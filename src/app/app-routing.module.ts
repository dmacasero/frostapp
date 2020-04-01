import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { HomeRoutingKeys } from "./pages/home/home-routing.keys";
import { SourceDetailsRoutingKeys } from "./pages/source-details/souce-details.routing.keys";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/home/home.module").then(m => m.HomePageModule)
  },
  {
    path: SourceDetailsRoutingKeys.BASE,
    loadChildren: () =>
      import("./pages/source-details/source-details.module").then(
        m => m.SourceDetailsPageModule
      )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
