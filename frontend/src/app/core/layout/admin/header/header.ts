import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { Component, inject, input, ViewEncapsulation, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { MenuItem, MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { Store } from '@ngrx/store';
import { selectThemeMode, toggleTheme } from '../../store';
import { ThemeToggleComponent } from '../../theme-toggle/theme-toggle';
@Component({
  selector: 'admin-header',
  standalone: true,
  encapsulation:ViewEncapsulation.None,
  imports: [CommonModule,AvatarGroupModule,AvatarModule,SpeedDialModule, ToggleSwitchModule,ButtonModule, ToastModule,ThemeToggleComponent],
  templateUrl: './header.html',
  providers: [MessageService],
  styleUrls: ['./header.css'],
})
export class Header {
  private store = inject(Store);
  themeMode$ = this.store.select(selectThemeMode);

  toggle() {
    this.store.dispatch(toggleTheme());
  }
  items: MenuItem[] | undefined;
   menuOpenSignal = input.required<WritableSignal<boolean>>();

toggleMenu() {
  this.menuOpenSignal().update(v => !v);
}

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'https://angular.dev'
            }
        ];
    }
}
