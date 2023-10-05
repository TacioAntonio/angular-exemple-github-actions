import { Component } from "@angular/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  private PAGES = [
    { name: 'Home', path: '' },
    { name: 'Create user', path: 'create-user' }
  ];

  public get getPages() {
    return this.PAGES;
  }
}
