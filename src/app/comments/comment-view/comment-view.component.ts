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
  @Input () commentId: number;
  @Input () responseTo: string;
  @Input () isResponse: boolean;

  comment: Comment;
  commentTimeSince: string;
  responseList: number[];
  author: string;

  isClicked: boolean = false;
  isExpanded: boolean = false;
  showToggleHidden: boolean;

  constructor(
    private storyService: StoryService,
    private timeService: TimeService
  ) { }

  ngOnInit(): void {
    this.storyService
      .getComment(this.commentId)
      .subscribe((data: Comment) => {
        this.comment = data;
        this.commentTimeSince = this.timeService.calculateTimeSince(data.time);
        this.author = data.userAuthor;
      });
  }

  loadResponses (commentId: number): void {
    if (!this.isClicked) {
      this.storyService
        .getComment(commentId)
        .subscribe((data: Comment) => {
          this.responseList = data.rankedCommentList;
          this.isClicked = true;
        })
    } else {
      this.isClicked = false;
    }
  }

  toggleView(state: string): void {
    if (state === 'more') this.isExpanded = true;
    else if (state === 'less') this.isExpanded = false;
  }
 }
