import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { ArchivedNewsComponent } from './archived-news/archived-news.component';

const routes: Routes = [
  { path: 'new', component: NewsListComponent },
  { path: 'archived', component: ArchivedNewsComponent },
  { path: '', redirectTo: '/new', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}