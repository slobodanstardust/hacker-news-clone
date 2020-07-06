import { Component, OnInit, Input } from '@angular/core';

import { Story } from '../models/story';
import { StoryService } from '../services/story.service';


@Component({
  selector: 'hnc-story-preview',
  templateUrl: './story-preview.component.html',
  styleUrls: ['./story-preview.component.scss']
})

export class StoryPreviewComponent implements OnInit {
  @Input () storyId: number;
  @Input () storyNumber: number;

  story: Story;
  storyTimeSince: any;
  storyText: string;

  constructor(private storyService: StoryService) { }

  ngOnInit(): void {
    this.storyService
      .getStory(this.storyId)
      .subscribe((data: Story) => {
        this.story = data
        this.storyTimeSince = this.storyService.calculateTimeSince(data.time);
        this.storyText = data.text;
      });
  }
}
