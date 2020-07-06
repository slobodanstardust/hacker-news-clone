import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainViewComponent } from './main-view/main-view.component';
import { StoryComponent } from './story/story.component';
import { CommentsComponent } from './comments/comments.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TextStoryComponent } from './text-story/text-story.component';


const routes: Routes = [
  {
    path: 'home',
    component: MainViewComponent
  },
  {
    path: 'story',
    component: StoryComponent
  },
  {
    path: 'comments/:id',
    component: CommentsComponent
  },
  {
    path: 'story/:id',
    component: TextStoryComponent
  },
  {
    path: '',
    redirectTo: '/home',    
    pathMatch: 'full'
  },
  {
    path: '**',
    component: MainViewComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent // Wildcard route for a 404 page
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
