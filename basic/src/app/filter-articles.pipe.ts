import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './article';
import { ArticleService } from './article.service';

@Pipe({
  name: 'filterArticles'
})
export class FilterArticlesPipe implements PipeTransform {

  constructor(private articleService: ArticleService) {

  }

  transform(value: Article[], keyword: string): any {
    // return null;
    // return value.filter(article => article.title.indexOf(keyword) !== -1);
    return this.articleService.searchArticles(value, keyword);
  }

}
