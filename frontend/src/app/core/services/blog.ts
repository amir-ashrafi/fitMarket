import { Injectable } from '@angular/core';
import { Blog } from '../../../type';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogs: Blog[] = [
    {
      id: '1',
      title: 'Angular Signal-Based Components',
      author: 'Ali Rezaei',
      date: '2025-12-01',
      summary: 'Learn how to use signals in Angular 17+ for reactive programming.',
      content: 'Full content about Angular signals...',
      category: 'Technology',
      tags: ['Angular', 'TypeScript', 'Signals'],
      readTime: 5,
      featured: true
    },
    {
      id: '2',
      title: 'The Future of Web Development',
      author: 'Sara Mohammadi',
      date: '2025-11-28',
      summary: 'Exploring trends that will shape web development in 2026.',
      content: 'Full content about web dev trends...',
      category: 'Technology',
      tags: ['Web', 'Future', 'AI'],
      readTime: 7,
      featured: false
    },
    {
      id: '3',
      title: 'Mindset for Competitive Exams',
      author: 'Dr. Karimi',
      date: '2025-11-25',
      summary: 'How to prepare mentally for tough exams like the graduate entrance test.',
      content: 'Full content about exam mindset...',
      category: 'Education',
      tags: ['Exam', 'Mindset', 'Study'],
      readTime: 6,
      featured: true
    },
  ];

  getBlogs(): Promise<Blog[]> {
    return Promise.resolve(this.blogs);
  }
}