import { Component } from '@angular/core';
import { Blog } from '../../../../../type';
import { blogs } from '../../../data/mock-products';
import { CardBlogs } from "../../card-blogs/card-blogs";
import { AngleLeft } from '@primeicons/angular/angle-left';
import { ChevronDown } from '@primeicons/angular/chevron-down';
@Component({
  selector: 'app-blogs-home',
  imports: [CardBlogs,AngleLeft,ChevronDown],
  templateUrl: './blogs.html',
  styleUrl: './blogs.css',
})
export class Blogs {
  newBlog: Blog[] = [...blogs]

}
