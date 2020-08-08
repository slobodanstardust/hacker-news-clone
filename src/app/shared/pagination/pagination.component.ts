import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';


@Component ({
    selector: 'hnc-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnInit, OnChanges {
    @Input () pageNumber: number;
    @Input () pageSize: number;
    @Input () pages: number[][];
    @Output () pageChange = new EventEmitter<number>();
    @Output () pageSizeChange = new EventEmitter<number>();

    pageCount: number;

    previousDisabled: boolean;
    nextDisabled: boolean;
    sizeOption: number = 50;

    constructor () { }

    ngOnInit (): void {
        this.setPagination();
    }

    ngOnChanges (): void {
        this.setPagination()
    }

    setPagination (): void {
        this.pageCount = this.pages.length;

        if (this.pageNumber === this.pageCount - 1) { // If it is on the last page.
            this.nextDisabled = true;
        } else {
            this.nextDisabled = false;
        }
        if (this.pageNumber === 0) { // If it is on the first page.
            this.previousDisabled = true;
        } else {
            this.previousDisabled = false;
        }
    }

    onPreviousPage (): void {
        this.pageNumber--;
        this.pageChange.emit(this.pageNumber);
    }

    onNextPage (): void {
        this.pageNumber++;
        this.pageChange.emit(this.pageNumber);
    }

    onPageSelect (pageNumber: number): void {
        this.pageChange.emit(pageNumber);
    }

    onPageSizeChange (pageSizeOption: string) {
        this.pageSize = Number(pageSizeOption);
        this.sizeOption = Number(pageSizeOption);
        this.pageSizeChange.emit(this.pageSize);
    }
}
