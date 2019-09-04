import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  toBorder() {
    // this.router.navigate(['/', 'utilities', 'borders']);
    this.router.navigateByUrl('/utilities/borders');
  }

  toTable() {
    const page = 10;
    // this.router.navigateByUrl('/tables/' + page + '?keyword=test');
    this.router.navigate(
      ['/', 'tables', page],
      { queryParams: { keyword: 'test' } });
  }
}
