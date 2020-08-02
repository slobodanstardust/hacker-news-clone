import { Component, OnInit, Input } from '@angular/core';

import { StoryService } from '../../core/services/story.service';
import { Comment } from '../../core/models/comment';
import { TimeService } from '../../core/services/time.service';


@Component({
    selector: 'hnc-comment-view',
    templateUrl: './comment-view.component.html',
    styleUrls: ['./comment-view.component.scss']
})

export class CommentViewComponent implements OnInit {
    @Input() comment: Comment;
    @Input() responseTo: string;
    @Input() isResponse: boolean;

    commentTimeSince: string;
    author: string;
    responseIds: number[] = [];
    responses: Comment[] = [];

    isClicked: boolean = false;
    isExpanded: boolean = false;
    showToggleHidden: boolean;

    constructor(
        private storyService: StoryService,
        private timeService: TimeService
    ) { }

    ngOnInit(): void {
        this.commentTimeSince = this.timeService.calculateTimeSince(this.comment.time);
        this.author = this.comment.userAuthor;
    }

    loadResponses(commentId: number): void {
        console.log(this.responses)
        if (!this.isClicked) {
            if (this.responses.length === 0) {
                this.storyService
                    .getComment(commentId)
                    .subscribe((data: Comment) => {
                        this.responseIds = data.rankedCommentList;

                        this.storyService
                            .getCommentsData(this.responseIds)
                            .subscribe((data: Comment[]) => {
                                this.responses = data;
                                this.isClicked = true;
                            })
                    })
            } else this.isClicked = true;
        } else {
            this.isClicked = false;
        }
    }

    toggleView(state: string): void {
        if (state === 'more') this.isExpanded = true;
        else if (state === 'less') this.isExpanded = false;
    }
}
