import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonationAddPage } from './donation-add';

@NgModule({
  declarations: [
    DonationAddPage,
  ],
  imports: [
    IonicPageModule.forChild(DonationAddPage),
  ],
})
export class DonationAddPageModule {}
