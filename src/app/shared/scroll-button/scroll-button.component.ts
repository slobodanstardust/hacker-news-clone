import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'hnc-scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.scss']
})
export class ScrollButtonComponent implements OnInit {
  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:scroll')  
  onScroll (): void {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  toStart(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  toEnd(): void {
    window.scrollTo(0, document.body.scrollHeight);
    window.scrollTo(0, document.documentElement.scrollHeight);
  }
}
