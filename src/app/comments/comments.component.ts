import { Component, OnInit } from '@angular/core';
import { StoryService } from '../core/services/story.service';
import { ActivatedRoute } from '@angular/router';

import { Story } from '../core/models/story';
import { TimeService } from '../core/services/time.service';


@Component({
  selector: 'hnc-comments',
  templateUrl: './comments.component.html'
})

export class CommentsComponent implements OnInit {
  storyId: number;
  story: Story;
  storyTimeSince: string;
  author: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private storyService: StoryService,
    private timeService: TimeService
  ) { }

  ngOnInit(): void {
    this.getCommetnId()

    this.storyService
      .getStory(this.storyId)
      .subscribe((data: Story) => {
        this.story = data;
        this.author = data.userAuthor;
        this.storyTimeSince = this.timeService.calculateTimeSince(data.time);
      });
  }

  getCommetnId (): void {
    this.activatedRoute.params
      .subscribe((data: any) => {
        this.storyId = Number(data.id);
      });
  }
}
