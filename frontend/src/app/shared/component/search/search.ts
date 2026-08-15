import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InputGroup } from "primeng/inputgroup";
import { InputGroupAddon } from "primeng/inputgroupaddon";
import { PIcon } from "@primeicons/angular/p-icon";

@Component({
  selector: 'app-search',
  imports: [InputGroup, InputGroupAddon, PIcon],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search_C {
  icons = ['search', 'arrow-right', 'times', 'bell'];

  // اگه true باشه، دکمه‌ی نوتیف نمایش داده می‌شه، در غیر این صورت دکمه‌ی برگشت
  @Input() showNotification: boolean = false;

  // تعداد نوتیف‌های خوانده‌نشده — اگه صفر یا undefined باشه، بج نمایش داده نمی‌شه
  @Input() notificationCount: number = 0;

  @Output() notificationClick = new EventEmitter<void>();
  @Output() backClick = new EventEmitter<void>();

  onNotificationClick(): void {
    this.notificationClick.emit();
  }

  onBackClick(): void {
    this.backClick.emit();
  }
}