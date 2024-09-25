import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { NewsItem } from '../models/news';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  standalone: true,
  imports: [CommonModule, HttpClientModule]
})
export class NewsListComponent implements OnInit {
  news: NewsItem[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews(): void {
    this.newsService.getNews().subscribe((data: NewsItem[]) => this.news = data);
  }

  archive(newsId: string): void {
    this.newsService.archiveNews(newsId).subscribe(() => {
      this.news = this.news.filter(news => news._id !== newsId);
    });
  }
}