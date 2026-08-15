import { Component, input } from '@angular/core';
import { Blog } from '../../../../type';
import { Avatar } from "primeng/avatar";
import { AngleRight } from '@primeicons/angular/angle-right';
import { Calendar } from '@primeicons/angular/calendar';
import { Tag } from "primeng/tag";
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-card-blogs',
  imports: [Avatar, AngleRight, Calendar, Tag, RouterLink],
  templateUrl: './card-blogs.html',
  styleUrl: './card-blogs.css',
})
export class CardBlogs {
blog = input.required<Blog>()
}
