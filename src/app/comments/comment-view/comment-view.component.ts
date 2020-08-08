import { Component, OnInit, Input } from '@angular/core';
import { SubscriptionLike } from 'rxjs';

import { StoryService } from '../../core/services/story.service';
import { Comment } from '../../core/models/comment';
import { TimeService } from '../../core/services/time.service';


@Component ({
    selector: 'hnc-comment-view',
    templateUrl: './comment-view.component.html',
    styleUrls: ['./comment-view.component.scss']
})

export class CommentViewComponent implements OnInit {
    subscription: SubscriptionLike;

    @Input () comment: Comment;
    @Input () responseTo: string;
    @Input () isResponse: boolean;

    commentTimeSince: string;
    responses: Comment[];

    isClicked: boolean = false;
    isExpanded: boolean = false;

    constructor (
        private storyService: StoryService,
        private timeService: TimeService
    ) { }

    ngOnInit (): void {
        this.commentTimeSince = this.timeService.calculateTimeSince(this.comment.time);
    }

    loadResponses (commentId: number): void {
        if (!this.isClicked) {
            if (!this.responses) {
                this.subscription = this.storyService
                    .getCommentsData(this.comment.rankedCommentList)
                    .subscribe((data: Comment[]) => {
                        this.responses = data;
                        this.isClicked = true;

                        this.subscription.unsubscribe();
                    })                
            } else this.isClicked = true;
        } else {
            this.isClicked = false;
        }
    }

    toggleView (state: string): void {
        if (state === 'more') this.isExpanded = true;
        else if (state === 'less') this.isExpanded = false;
    }
}
