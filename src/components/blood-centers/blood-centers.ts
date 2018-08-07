import { Component, Input } from '@angular/core';

import { BloodCenter } from '../../models/blood-center';


@Component({
  selector: 'blood-centers',
  templateUrl: 'blood-centers.html'
})
export class BloodCentersComponent {

  @Input()
  bloodCenter: BloodCenter;
}
