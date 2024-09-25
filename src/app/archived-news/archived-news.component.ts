import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { NewsItem } from '../models/news';

@Component({
  selector: 'app-archived-news',
  templateUrl: './archived-news.component.html'
})
export class ArchivedNewsComponent implements OnInit {
  archivedNews: NewsItem[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getArchivedNews().subscribe(data => this.archivedNews = data);
  }

  remove(newsId: string): void {
    this.newsService.removeNews(newsId).subscribe(() => {
      this.archivedNews = this.archivedNews.filter(news => news._id !== newsId);
    });
  }
}