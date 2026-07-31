import { Component, ViewEncapsulation } from '@angular/core';
import { AuthForm } from "../auth-form/auth-form";

@Component({
  selector: 'app-login',
  imports: [AuthForm],
  encapsulation:ViewEncapsulation.None,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
    
}
