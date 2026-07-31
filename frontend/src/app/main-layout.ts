import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Header } from "./core/layout/e-commerce/header/header";
import { Footer } from "./core/layout/e-commerce/footer/footer";

@Component({
  selector: 'main-layout',
  standalone: true,
  imports: [RouterOutlet,Footer,Header],
  template: `
    <app-header />
    <router-outlet></router-outlet>
    <app-footer />
  `
})
export class MainLayout {}
