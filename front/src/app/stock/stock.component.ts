import { Component } from '@angular/core';
import {
  faRotateRight,
  faPlus,
  faTrashCan,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import { ArticleService } from '../services/article.service';
import { Article } from '../interfaces/article';
import { delay, of, switchMap, tap } from 'rxjs';

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
        delay(1000),
        switchMap(() => this.articleService.removeArticles(ids)),
        switchMap(() => this.articleService.getArticles()),
        tap(() => {
          this.selectedArticles.clear();
        })
      )
      .subscribe();
  }

  refresh() {
    console.log('refresh');
  }
}
