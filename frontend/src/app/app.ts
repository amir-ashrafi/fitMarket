import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AuthService } from './core/auth/services/auth.service';



@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,ButtonModule,AutoCompleteModule,    RouterOutlet ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fitMarket');
  constructor(private auth: AuthService) {
    this.auth.init().catch(() => {});
  }
}
