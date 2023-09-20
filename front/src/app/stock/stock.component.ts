import { Component } from '@angular/core';
import {
  faRotateRight,
  faPlus,
  faTrashCan,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import { ArticleService } from '../services/article.service';
import { Article } from '../interfaces/article';
import { delay, finalize, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent {
  faRotateRight = faRotateRight;
  faPlus = faPlus;
  faTrashCan = faTrashCan;
  faCircleNotch = faCircleNotch;

  selectedArticles = new Set<Article>();

  isRefreshing = false;
  isRemoving = false;

  constructor(public articleService: ArticleService) {}

  select(a: Article) {
    if (this.selectedArticles.has(a)) {
      this.selectedArticles.delete(a);
      return;
    }
    this.selectedArticles.add(a);
  }

  remove() {
    console.log('remove');
    const ids = [...this.selectedArticles].map((a) => a.id);

    of(undefined)
      .pipe(
        tap(() => {
          this.isRemoving = true;
        }),
        delay(1000),
        switchMap(() => this.articleService.removeArticles(ids)),
        switchMap(() => this.articleService.getArticles()),
        tap(() => {
          this.selectedArticles.clear();
        }),
        finalize(() => {
          this.isRemoving = false;
        })
      )
      .subscribe();
  }

  refresh() {
    console.log('refresh');

    of(undefined)
      .pipe(
        tap(() => {
          this.isRefreshing = true;
        }),
        delay(1000),
        switchMap(() => this.articleService.getArticles()),
        finalize(() => {
          this.isRefreshing = false;
        })
      )
      .subscribe();
  }
}
