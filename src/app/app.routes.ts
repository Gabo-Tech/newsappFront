import { Routes } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { ArchivedNewsComponent } from './archived-news/archived-news.component';

export const routes: Routes = [
  { path: 'new', component: NewsListComponent },
  { path: 'archived', component: ArchivedNewsComponent },
  { path: '', redirectTo: 'new', pathMatch: 'full' }  // Default to 'new' view
];
