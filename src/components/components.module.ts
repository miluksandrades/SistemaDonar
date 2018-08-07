import { NgModule } from '@angular/core';

import { BloodCentersComponent } from './blood-centers/blood-centers';
import { CampaignsComponent } from './campaigns/campaigns';
import { DonationsComponent } from './donations/donations';
import { ExamsComponent } from './exams/exams';
import { UsersComponent } from './users/users';

@NgModule({
	declarations: [
    BloodCentersComponent,
    CampaignsComponent,
		DonationsComponent,
		ExamsComponent,
    UsersComponent],
	imports: [],
	exports: [
    BloodCentersComponent,
    CampaignsComponent,
		DonationsComponent,
		ExamsComponent,
    UsersComponent]
})
export class ComponentsModule {}
