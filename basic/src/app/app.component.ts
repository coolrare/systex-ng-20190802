import { Component, ViewChild, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { SearchBoxComponent } from './search-box/search-box.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'basic';
  api = environment.apiUrl;

  @ViewChild('searchBox', { static: true }) searchBox: SearchBoxComponent;

  ngOnInit(): void {
  }
}
