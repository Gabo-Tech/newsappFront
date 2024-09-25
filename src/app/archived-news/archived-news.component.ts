import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { NewsItem } from '../models/news';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-archived-news',
  templateUrl: './archived-news.component.html',
  styleUrls: ['./archived-news.component.scss'],
  standalone: true,
  imports: [CommonModule, HttpClientModule]
})
export class ArchivedNewsComponent implements OnInit {
  archivedNews: NewsItem[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.loadArchivedNews();
  }

  loadArchivedNews(): void {
    this.newsService.getArchivedNews().subscribe((data: NewsItem[]) => this.archivedNews = data);
  }

  remove(newsId: string): void {
    this.newsService.removeNews(newsId).subscribe(() => {
      this.archivedNews = this.archivedNews.filter(news => news._id !== newsId); 
    });
  }
}
