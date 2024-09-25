import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { NewsItem } from '../models/news';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html'
})
export class NewsListComponent implements OnInit {
  news: NewsItem[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews(): void {
    this.newsService.getNews().subscribe(data => this.news = data);
  }

  archive(newsId: string): void {
    this.newsService.archiveNews(newsId).subscribe(() => {
      this.news = this.news.filter(news => news._id !== newsId); // Remove from new list
    });
  }
}
