import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { WeatherComponent } from "./weather.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  declarations: [WeatherComponent],
  exports: [WeatherComponent]
})
export class WeatherComponenttModule {}
