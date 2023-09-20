import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../interfaces/article';

const articles: Article[] = [
  { id: 'a1', name: 'xTournevis', price: 2.99, qty: 150 },
  { id: 'a2', name: 'xPelle', price: 4, qty: 25 },
];

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles$ = new BehaviorSubject<Article[] | undefined>(undefined);

  constructor() {
    this.articles$.next(articles);
  }
}
