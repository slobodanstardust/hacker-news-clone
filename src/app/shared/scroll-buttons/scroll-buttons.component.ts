import { Component, OnInit, HostListener } from '@angular/core';


@Component ({
    selector: 'hnc-scroll-buttons',
    templateUrl: './scroll-buttons.component.html',
    styleUrls: ['./scroll-buttons.component.scss']
})
export class ScrollButtonsComponent implements OnInit {
    show: boolean = false;

    constructor () { }

    ngOnInit (): void {
    }

    @HostListener ('document:scroll')
    onScroll (): void {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            this.show = true;
        } else {
            this.show = false;
        }
    }

    toStart (): void {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    toEnd (): void {
        window.scrollTo(0, document.body.scrollHeight);
        window.scrollTo(0, document.documentElement.scrollHeight);
    }
}
