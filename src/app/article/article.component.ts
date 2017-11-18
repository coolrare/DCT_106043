import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent implements OnInit {

  @Input() data;
  @Output() removeEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  remove() {
    this.removeEvent.emit(this.data.id);
  }

}
