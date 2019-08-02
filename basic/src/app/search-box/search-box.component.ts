import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  keyword = 'test';

  @ViewChild('input', {static: true}) searchInput: ElementRef;

  constructor() {}

  ngOnInit() {
    // (this.searchInput.nativeElement as HTMLInputElement).classList.add('class');
  }

  keywordChange(event: Event) {
    this.keyword = (event.target as HTMLInputElement).value;
  }
}
