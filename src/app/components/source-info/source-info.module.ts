import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { SourceInfoComponent } from "./source-info.component";

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [SourceInfoComponent],
  exports: [SourceInfoComponent]
})
export class SourceInfoComponentModule {}
