import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'hnc-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnInit, OnChanges {
  @Input () pagination: { page: number, pageSize: number };
  @Input () pages: number[][];
  @Output () pageChange = new EventEmitter<{ page: number, pageSize: number }>();

  paginationChanges: { page: number, pageSize: number } = {
    page: 0,
    pageSize: 100
  };

  pageCount: number;

  previousDisabled: boolean;
  nextDisabled: boolean;
  sizeOption: string = '100';

  constructor() { }

  ngOnInit(): void {
    this.setPagination();
  }

  ngOnChanges(): void {
    this.setPagination()
  }
  
  setPagination (): void {
    this.pageCount = this.pages.length ;

    if (this.pagination.page === this.pageCount - 1) { // If it is on the last page.
      this.nextDisabled = true;
    } else {
      this.nextDisabled = false;
    }
    if (this.pagination.page === 0) { // If it is on the first page.
      this.previousDisabled = true;
    } else {
      this.previousDisabled = false;
    }
  }

  onPreviousPage (): void {
    this.paginationChanges.page--;
    this.pageChange.emit(this.paginationChanges);
  }

  onNextPage (): void {
    this.paginationChanges.page++;
    this.pageChange.emit(this.paginationChanges);
  }

  onPageSelect (page: number): void {
    this.paginationChanges.page = page;
    this.pageChange.emit(this.paginationChanges);
  }

  onPageSizeChange (option: string): void {
    this.paginationChanges.page = 0;
    this.paginationChanges.pageSize = Number(option);
    this.pageChange.emit(this.paginationChanges);
    this.sizeOption = option;
  }
}
