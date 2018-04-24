import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BloodCenterPage } from './blood-center';

@NgModule({
  declarations: [
    BloodCenterPage,
  ],
  imports: [
    IonicPageModule.forChild(BloodCenterPage),
  ],
})
export class BloodCenterPageModule {}
