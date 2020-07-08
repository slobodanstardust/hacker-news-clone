import { Component, OnInit } from '@angular/core';
import { StoryService } from '../services/story.service';
import { ActivatedRoute } from '@angular/router';

import { Story } from '../models/story';


@Component({
  selector: 'hnc-text-story',
  templateUrl: './text-story.component.html',
  styleUrls: ['./text-story.component.scss']
})

export class TextStoryComponent implements OnInit {
  storyId: number;
  story: Story;
  storyTimeSince: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private storyService: StoryService
  ) { }

  ngOnInit(): void {
    this.getStoryId();
    this.storyService
      .getStory(this.storyId)
      .subscribe((data: Story) => {
        this.story = data;
        this.storyTimeSince = this.storyService.calculateTimeSince(data.time);
      })
  }

  getStoryId (): void {
    this.activatedRoute.params
      .subscribe((data: any) => {
        this.storyId = Number(data.id);
      });
  }
}
