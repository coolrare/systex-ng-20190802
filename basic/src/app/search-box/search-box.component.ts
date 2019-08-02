import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  keyword = 'test';

  @ViewChild('input', { static: true }) searchInput: ElementRef;

  @Output() searchChange = new EventEmitter();

  constructor() {}

  ngOnInit() {
    // (this.searchInput.nativeElement as HTMLInputElement).classList.add('class');
  }

  keywordChange(event: Event) {
    this.keyword = (event.target as HTMLInputElement).value;
  }

  search() {
    console.log('test');
    this.searchChange.emit(this.keyword);
  }
}
