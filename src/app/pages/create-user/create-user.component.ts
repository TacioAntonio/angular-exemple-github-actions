import { Component } from "@angular/core";

import { USERS } from "../../shared/fake-db";

@Component({
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  name!: string;

  submit() {
    if (this.name) {
      USERS.push(this.name);
      this.name = '';
    }
  }
}
