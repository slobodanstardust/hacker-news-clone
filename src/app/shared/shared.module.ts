import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationComponent } from './pagination/pagination.component';
import { ScrollButtonsComponent } from './scroll-buttons/scroll-buttons.component';


@NgModule({
  declarations: [
    PaginationComponent,
    ScrollButtonsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent,
    ScrollButtonsComponent
  ]
})

export class SharedModule { }
