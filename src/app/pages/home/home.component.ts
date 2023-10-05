import { Component } from "@angular/core";
import { USERS } from "../../shared/fake-db";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  get getUsers() {
    return USERS;
  }
}
