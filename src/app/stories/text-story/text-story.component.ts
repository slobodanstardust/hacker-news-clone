import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoryService } from '../../core/services/story.service';
import { ActivatedRoute } from '@angular/router';
import { SubscriptionLike } from 'rxjs';

import { Story } from '../../core/models/story'
import { TimeService } from '../../core/services/time.service';


@Component ({
    selector: 'hnc-text-story',
    templateUrl: './text-story.component.html',
    styleUrls: ['./text-story.component.scss']
})

export class TextStoryComponent implements OnInit, OnDestroy {
    subscription: SubscriptionLike;

    storyId: number;
    story: Story;
    storyTimeSince: string;

    constructor (
        private activatedRoute: ActivatedRoute,
        private storyService: StoryService,
        private timeService: TimeService
    ) { }

    ngOnInit (): void {
        this.getStoryId();
        this.loadStory();
    }

    ngOnDestroy () {
        this.subscription.unsubscribe();
    }

    getStoryId (): void {
        this.activatedRoute.params
            .subscribe((data: any) => {
                this.storyId = Number(data.id);
            });
    }

    loadStory (): void {
        this.subscription = this.storyService
            .getStory(this.storyId)
            .subscribe((data: Story) => {
                this.story = data;
                this.storyTimeSince = this.timeService.calculateTimeSince(data.time);
            })
    }
}
