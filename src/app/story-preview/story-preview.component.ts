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
  @Input () listNumber: number;

  story: Story;
  storyTimeSince: any;
  storyText: string;

  constructor(private storyService: StoryService) { }

  ngOnInit(): void {
    this.storyService
      .getStory(this.storyId)
      .subscribe((data: Story) => {
        this.story = data
        this.calculateTimeSince(data.time);
        this.storyText = data.text;
      });
  }
  
  calculateTimeSince (time: number): void {
    const timeNow: number = new Date().getTime();
    const temp: Date = new Date(time * 1000);
    const timeOfStory: number = new Date(temp).getTime();
    const timeDiffernce: number = timeNow - timeOfStory;

    const yearInSeconds: number = 31536000;
    const monthInSeconds: number = 2592000;
    const dayInSeconds: number = 86400;
    const hourInSeconds: number = 3600;
    const minuteInSeconds: number = 60;

    const years: number = Math.floor(timeDiffernce / yearInSeconds);
    const months: number = Math.floor(timeDiffernce / monthInSeconds);
    const days: number = Math.floor(timeDiffernce / dayInSeconds);
    const hours: number = Math.floor(timeDiffernce / hourInSeconds);
    const minutes: number = Math.floor(timeDiffernce / minuteInSeconds);

    if (years === 1) this.storyTimeSince = `${years} year ago`;
    else if (years > 1) this.storyTimeSince = `${years} years ago`;
    else if (months === 1) this.storyTimeSince = `${months} month ago`;
    else if (months > 1) this.storyTimeSince = `${months} months ago`;
    else if (days === 1) this.storyTimeSince = `${days} day ago`;
    else if (days > 1) this.storyTimeSince = `${days} days ago`;
    else if (hours === 1) this.storyTimeSince = `${hours} hour ago`;
    else if (hours > 1) this.storyTimeSince = `${hours} hours ago`;
    else if (minutes === 1) this.storyTimeSince = `${minutes} minute ago`;
    else if (minutes > 1) this.storyTimeSince = `${minutes} minutes ago`;
  }
}
