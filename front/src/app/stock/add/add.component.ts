import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { delay, of, switchMap } from 'rxjs';
import { NewArticle } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  faPlus = faPlus;

  f = new FormGroup({
    name: new FormControl('Truc', [
      Validators.required,
      Validators.maxLength(10),
    ]),
    price: new FormControl(0, [Validators.required]),
    qty: new FormControl(0, [Validators.required]),
  });

  constructor(public articleService: ArticleService, public router: Router) {}

  submit() {
    console.log('submit');
    const newArticle: NewArticle = this.f.value as NewArticle;
    of(undefined)
      .pipe(
        delay(1000),
        switchMap(() => this.articleService.addArticle(newArticle)),
        switchMap(() => this.articleService.getArticles()),
        switchMap(() => this.router.navigateByUrl('/stock'))
      )
      .subscribe();
  }
}
