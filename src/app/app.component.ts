import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {

  title = 'app';
  searchText = '';

  constructor(public dataSvc: DataService) { }

  changeSearchText(value) {
    this.searchText = value;
  }

  removeArticle($event) {
    // 作法一
    // for (let i = this.articles.length - 1; i >= 0; i--) {
    //   let article = this.articles[i];
    //   if (article.id === $event) {
    //     this.articles.splice(i, 1);
    //   }
    // }

    // 作法二
    // this.articles = this.articles.filter((item) => {
    //   return item.id !== $event;
    // });

    // 做法三
    this.dataSvc.articles = this.dataSvc.articles.filter(item => item.id !== $event);
  }

}
