import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [ButtonModule, RouterLink],
  templateUrl: './header.html',
  encapsulation:ViewEncapsulation.None,
  styleUrl: './header.css',
})
export class Header {

}
