import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, map, of, switchMap } from 'rxjs';
import { Article, NewArticle } from '../interfaces/article';
import { HttpClient } from '@angular/common/http';

const url = 'http://localhost:3000/api/articles';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles$ = new BehaviorSubject<Article[] | undefined>(undefined);

  constructor(public http: HttpClient) {
    if (this.articles$.value === undefined) {
      this.getArticles().subscribe();
    }
  }

  getArticles(): Observable<void> {
    return of(undefined).pipe(
      delay(1000),
      switchMap(() => this.http.get<Article[]>(url)),
      map((articles) => {
        this.articles$.next(articles);
      })
    );
  }

  addArticle(newArticle: NewArticle): Observable<void> {
    return this.http.post<void>(url, newArticle);
  }

  removeArticles(ids: string[]): Observable<void> {
    return this.http.delete<void>(url, { body: ids });
  }
}
