import { Component, Input } from '@angular/core';

import { Donation } from "../../models/donation";

@Component({
  selector: 'donations',
  templateUrl: 'donations.html'
})
export class DonationsComponent {

  @Input()
  donation: Donation;

}
