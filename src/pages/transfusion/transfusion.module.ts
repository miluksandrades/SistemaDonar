import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransfusionPage } from './transfusion';

@NgModule({
  declarations: [
    TransfusionPage,
  ],
  imports: [
    IonicPageModule.forChild(TransfusionPage),
  ],
})
export class TransfusionPageModule {}
