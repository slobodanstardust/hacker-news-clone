import { Component, OnInit, Input } from '@angular/core';

import { Story } from '../../core/models/story'
import { StoryService } from '../../core/services/story.service';
import { TimeService } from '../../core/services/time.service';


@Component({
  selector: 'hnc-story-preview',
  templateUrl: './story-preview.component.html'
})

export class StoryPreviewComponent implements OnInit {
  @Input () storyId: number;
  @Input () storyIndex: number;
  @Input () pagination: { page: number, pageSize: number };

  story: Story;
  storyTimeSince: any;
  storyText: string;
  storyNumber: number;

  constructor(
    private storyService: StoryService,
    private timeService: TimeService
  ) { }

  ngOnInit(): void {
    this.storyService
      .getStory(this.storyId)
      .subscribe((data: Story) => {
        this.story = data
        this.storyTimeSince = this.timeService.calculateTimeSince(data.time);
        this.storyText = data.text;
        this.storyNumber = this.storyIndex + 1 + (this.pagination?.page * this.pagination?.pageSize)
      });
  }
}
