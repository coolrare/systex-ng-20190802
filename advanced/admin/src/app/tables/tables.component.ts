import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  page = 1;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit() {
    const originalPage = this.route.snapshot.paramMap.get('page');
    console.log(originalPage);

    this.route.paramMap.subscribe(paramMap => {
      console.log(paramMap);
      const page = +paramMap.get('page') || 1;
      console.log(page);
      this.page = page;
      // 去 API 抓資料
    });

    this.route.queryParamMap.subscribe(query => {
      console.log(query.get('keyword'));
    });

    // this.route.paramMap.subscribe(paramMap => {
    //   const page = paramMap.get('page');
    //   this.httpClient.get('api/table/?page=' + page).subscribe(data => {
    //     console.log(data);
    //   });
    // });
    this.route.paramMap
      .pipe(
        map(paramMap => paramMap.get('page')),
        switchMap(page => this.httpClient.get('api/table?page=' + page))
      )
      .subscribe(data => {
        console.log(data);
      });

    this.route.params.subscribe(params => {
      const page = params.page;
    });

    // this.route.queryParams

  }
}
