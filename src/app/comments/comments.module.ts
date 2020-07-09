import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { CommentsComponent } from './comments.component';
import { CommentViewComponent } from './comment-view/comment-view.component';


@NgModule({
  declarations: [
    CommentsComponent,
    CommentViewComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    CommentsComponent
  ]
})

export class CommentsModule { }
