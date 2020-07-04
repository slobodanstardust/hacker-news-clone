import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { StoryPreviewComponent } from './story-preview/story-preview.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { CommentsComponent } from './comments/comments.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoryComponent } from './story/story.component';


@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    StoryPreviewComponent,
    NavigationComponent,
    TopStoriesComponent,
    CommentsComponent,
    PageNotFoundComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
