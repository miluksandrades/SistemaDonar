import { Component, Input } from '@angular/core';

import { Campaign } from "../../models/campaign";

@Component({
  selector: 'campaigns',
  templateUrl: 'campaigns.html'
})
export class CampaignsComponent {

  @Input()
  campaign: Campaign;

}
