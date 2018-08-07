import { Component, Input } from '@angular/core';

import { User } from '../../models/user';

@Component({
  selector: 'users',
  templateUrl: 'users.html'
})
export class UsersComponent {

  @Input()
  user: User;

}
