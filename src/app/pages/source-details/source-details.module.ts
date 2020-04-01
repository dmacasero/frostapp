import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SourceDetailsPageRoutingModule } from "./source-details-routing.module";

import { SourceDetailsPage } from "./source-details.page";
import { SourceInfoComponentModule } from "src/app/components/source-info.module";
import { SourceInfoComponent } from "src/app/components/source-info/source-info.component";

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
