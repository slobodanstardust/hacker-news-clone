import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationComponent } from './pagination/pagination.component';
import { ScrollButtonComponent } from './scroll-button/scroll-button.component';


@NgModule({
  declarations: [
    PaginationComponent,
    ScrollButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent,
    ScrollButtonComponent
  ]
})

export class SharedModule { }
