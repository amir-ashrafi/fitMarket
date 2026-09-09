import { Component } from '@angular/core';
import { Verified } from '@primeicons/angular/verified';
import { ButtonDirective } from "primeng/button";
import { UserEdit } from '@primeicons/angular/user-edit';
import { Avatar } from "primeng/avatar";
import { Send } from '@primeicons/angular/send';
@Component({
  selector: 'app-title',
  imports: [Verified, ButtonDirective, UserEdit, Avatar,Send],
  templateUrl: './title.html',
  styleUrl: './title.css',
})
export class Title {

}
