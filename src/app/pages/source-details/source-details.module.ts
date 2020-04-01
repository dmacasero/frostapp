import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SourceDetailsPageRoutingModule } from "./source-details-routing.module";

import { SourceDetailsPage } from "./source-details.page";
import { SourceInfoComponent } from "src/app/components/source-info/source-info.component";
import { SourceInfoComponentModule } from "src/app/components/source-info/source-info.module";
import { WeatherComponenttModule } from "src/app/components/weather/weather.module";
import { WeatherComponent } from "src/app/components/weather/weather.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SourceDetailsPageRoutingModule,
    SourceInfoComponentModule,
    WeatherComponenttModule
  ],
  declarations: [SourceDetailsPage],
  entryComponents: [SourceInfoComponent, WeatherComponent]
})
export class SourceDetailsPageModule {}
