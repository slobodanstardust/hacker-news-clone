import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoriesComponent } from './stories/stories.component';
import { TextStoryComponent } from './stories/text-story/text-story.component';
import { CommentsComponent } from './comments/comments.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';


const routes: Routes = [
    {
        path: 'home',
        component: StoriesComponent
    },
    {
        path: 'new',
        component: StoriesComponent
    },
    {
        path: 'comments/:id',
        component: CommentsComponent
    },
    {
        path: 'stories/:id',
        component: TextStoryComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: StoriesComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent // Wildcard route for a 404 page
    }
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
