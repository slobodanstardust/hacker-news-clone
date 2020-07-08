import { Component, OnInit } from '@angular/core';
import { StoryService } from '../services/story.service';
import { ActivatedRoute } from '@angular/router';

import { Story } from '../models/story';


@Component({
  selector: 'hnc-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})

export class CommentsComponent implements OnInit {
  storyId: number;
  story: Story;
  storyTimeSince: string;
  author: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private storyService: StoryService
  ) { }

  ngOnInit(): void {
    this.getCommetnId()

    this.storyService
      .getStory(this.storyId)
      .subscribe((data: Story) => {
        this.story = data;
        this.author = data.userAuthor;
        this.storyTimeSince = this.storyService.calculateTimeSince(data.time);
      });
  }

  getCommetnId (): void {
    this.activatedRoute.params
      .subscribe((data: any) => {
        this.storyId = Number(data.id);
      });
  }
}
