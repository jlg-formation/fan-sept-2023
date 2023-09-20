import { Component } from '@angular/core';
import {
  faRotateRight,
  faPlus,
  faTrashCan,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import { ArticleService } from '../services/article.service';

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

  constructor(public articleService: ArticleService) {}
}
