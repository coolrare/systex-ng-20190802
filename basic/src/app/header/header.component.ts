import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'The Will Will web!!';
  subtitle = '記載著 <strong>Will</strong> 在網路世界的學習心得與技術分享';
  headerClass = 'pull-left';
  test = 'Mike';
  counter = 0;
  isHighlight = false;
  fontSize = 12;

  constructor() {}

  ngOnInit() {}

  hello() {
    this.counter++;
    this.fontSize += 2;
    console.log('test');
    this.isHighlight = !this.isHighlight;
  }
}
