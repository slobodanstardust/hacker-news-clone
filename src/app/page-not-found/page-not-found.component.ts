import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'hnc-page-not-found',
  template: `
    <h1>Sorry, I can't find this page...</h1>
  `
})

export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
