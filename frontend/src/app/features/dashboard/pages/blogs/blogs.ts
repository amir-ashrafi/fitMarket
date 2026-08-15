import { Component, signal, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Blog } from '../../../../../type';
import { BlogService } from '../../../../core/services/blog';
import { DataView } from 'primeng/dataview';
import { Tag } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { SelectButton } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-blogs',
  imports: [
    DataView,
    Tag,
    ButtonModule,
    SelectButton,
    CommonModule,
    FormsModule,PaginatorModule
  ],
  providers: [BlogService],
  templateUrl: './blogs.html',
  encapsulation:ViewEncapsulation.None,
  standalone: true,

  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './blogs.css',
})
export class Blogs {
  layout: 'list' | 'grid' = 'grid';
  blogs = signal<Blog[]>([]);
  options = ['list', 'grid'];

  first: number = 0;

  rows: number = 10;

  onPageChange(event: PaginatorState) {
      this.first = event.first ?? 0;
      this.rows = event.rows ?? 10;
  }
  constructor(private blogService: BlogService) {}
  ngOnInit() {
    this.blogService.getBlogs().then((data) => {
      this.blogs.set([...data.slice(0, 12)]);
    });
  }

  getSeverity(
    blog: Blog
  ): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' | null {
    if (blog.featured) {
      return 'success';
    }
  
    switch (blog.category) {
      case 'Workout & Fitness':
        return 'info';
  
      case 'Sports Nutrition':
        return 'warn';
  
      case 'Sports Supplements':
        return 'danger';
  
      case 'Sports Equipment':
        return 'secondary';
  
      case 'Sports & Health':
        return 'success';
  
      case 'Buying Guide':
        return 'contrast';
  
      case 'Sports News':
        return 'info';
  
      default:
        return 'secondary';
    }
  }
}