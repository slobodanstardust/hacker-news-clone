import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { StoryPreviewComponent } from './story-preview/story-preview.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CommentsComponent } from './comments/comments.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TextStoryComponent } from './text-story/text-story.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CommentViewComponent } from './comment-view/comment-view.component';


@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    StoryPreviewComponent,
    NavigationComponent,
    CommentsComponent,
    PageNotFoundComponent,
    TextStoryComponent,
    PaginationComponent,
    CommentViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
