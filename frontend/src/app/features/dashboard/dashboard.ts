import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SplitterModule } from 'primeng/splitter';
import { Header } from '../../core/layout/admin/header/header';
import { Sidebar } from '../../core/layout/admin/sidebar/sidebar';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, SplitterModule, Header, Sidebar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
    isMenuMobileOpen=signal<boolean>(false)
      toggleMenu() { this.isMenuMobileOpen.update(v => !v); }
  closeMenu() { this.isMenuMobileOpen.set(false); }
}
