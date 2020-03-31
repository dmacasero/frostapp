import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SourceDetailsPageRoutingModule } from './source-details-routing.module';

import { SourceDetailsPage } from './source-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SourceDetailsPageRoutingModule
  ],
  declarations: [SourceDetailsPage]
})
export class SourceDetailsPageModule {}
