import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { NavbarComponent } from "./components/navbar/navbar.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

@NgModule({
  declarations: [
    NavbarComponent,
    PageNotFoundComponent
  ],
  exports: [
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
