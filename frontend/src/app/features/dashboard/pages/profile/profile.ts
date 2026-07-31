import { Component, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { AvatarModule, Avatar } from 'primeng/avatar';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { IftaLabelModule, IftaLabel } from 'primeng/iftalabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ToastModule,
    CommonModule,
    FormsModule,
    Avatar,
    IftaLabel
],
  providers: [MessageService,AvatarModule,OverlayBadgeModule,IftaLabelModule, InputTextModule, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
profileForm = signal({
    fullName: 'علی رضایی',
    email: 'admin@fitmarket.com',
    phoneNumber: '09123456789',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  constructor(private messageService: MessageService) {}
value: string | undefined;
  onSubmit() {
    if (this.profileForm().newPassword !== this.profileForm().confirmPassword) {
      this.messageService.add({ severity: 'error', summary: 'خطا', detail: 'رمزهای عبور جدید یکسان نیستند.' });
      return;
    }

    this.messageService.add({ severity: 'success', summary: 'موفق', detail: 'تنظیمات با موفقیت ذخیره شد.' });
  }
}
