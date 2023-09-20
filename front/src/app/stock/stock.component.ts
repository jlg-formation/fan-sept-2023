import { Component } from '@angular/core';
import {
  faRotateRight,
  faPlus,
  faTrashCan,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import { ArticleService } from '../services/article.service';
import { Article } from '../interfaces/article';

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
}
