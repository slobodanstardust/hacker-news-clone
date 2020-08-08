import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { StoriesComponent } from './stories.component';
import { StoryPreviewComponent } from './story-preview/story-preview.component';
import { TextStoryComponent } from './text-story/text-story.component';


@NgModule ({
    declarations: [
        StoriesComponent,
        StoryPreviewComponent,
        TextStoryComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        SharedModule
    ],
    exports: [
        StoriesComponent,
        TextStoryComponent
    ]
})

export class StoriesModule { }
