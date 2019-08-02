import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  keyword = 'test';
  constructor() {}

  ngOnInit() {}

  keywordChange(event: Event) {
    this.keyword = (event.target as HTMLInputElement).value;
  }
}
