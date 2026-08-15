import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthForm } from "../auth-form/auth-form";

@Component({
  selector: 'app-register',
  imports: [AuthForm],
  templateUrl: './register.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './register.css',
})
export class Register {

}
