import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SourceDetailsPageRoutingModule } from "./source-details-routing.module";

import { SourceDetailsPage } from "./source-details.page";
import { SourceInfoComponent } from "src/app/components/source-info/source-info.component";
import { SourceInfoComponentModule } from "src/app/components/source-info/source-info.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SourceDetailsPageRoutingModule,
    SourceInfoComponentModule
  ],
  declarations: [SourceDetailsPage],
  entryComponents: [SourceInfoComponent]
})
export class SourceDetailsPageModule {}
