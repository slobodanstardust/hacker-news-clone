import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoryService } from '../core/services/story.service';
import { ActivatedRoute } from '@angular/router';
import { SubscriptionLike, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Story } from '../core/models/story';
import { Comment } from '../core/models/comment';
import { TimeService } from '../core/services/time.service';


@Component ({
    selector: 'hnc-comments',
    templateUrl: './comments.component.html'
})

export class CommentsComponent implements OnInit, OnDestroy {
    subscription: SubscriptionLike;

    storyId: number;
    story: Story;
    storyTimeSince: string;
    comments: Comment[];

    constructor (
        private activatedRoute: ActivatedRoute,
        private storyService: StoryService,
        private timeService: TimeService
    ) { }

    ngOnInit (): void {
        this.getStoryId();
        this.loadStoryCommentData();
    }

    getStoryId (): void {
        this.activatedRoute.params
            .subscribe((data: any) => this.storyId = Number(data.id));
    }

    loadStoryCommentData (): void {
        this.subscription = this.storyService
            .getStory(this.storyId)
            .pipe(
                switchMap((data: Story) => {
                    this.story = data;
                    this.storyTimeSince = this.timeService.calculateTimeSince(data.time);

                    return this.storyService
                        .getCommentsData(this.story.rankedCommentList);
                })
            )
            .subscribe((data: Comment[]) => {
                this.comments = data;
            })
    }

    ngOnDestroy (): void {
        this.subscription.unsubscribe();
        // 'activatedRoute' is unsubscribed automaticaly.
    }
}
