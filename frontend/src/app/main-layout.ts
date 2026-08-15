import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Header } from "./core/layout/e-commerce/header/header";
import { Footer } from "./core/layout/e-commerce/footer/footer";

@Component({
  selector: 'main-layout',
  standalone: true,
  imports: [RouterOutlet,Footer,Header],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <app-header style="display: flex; justify-content: center; background-color: var(--color-gray-950);width: 100%; " />
    <router-outlet></router-outlet>
    <app-footer />
  `
})
export class MainLayout {}
