import { Component, OnInit, Input } from '@angular/core';

import { Story } from '../../core/models/story'
import { TimeService } from '../../core/services/time.service';


@Component ({
    selector: 'hnc-story-preview',
    templateUrl: './story-preview.component.html'
})

export class StoryPreviewComponent implements OnInit {
    @Input () story: Story;
    @Input () storyIndex: number;
    @Input () pageNumber: number;
    @Input () pageSize: number;

    storyTimeSince: any;
    storyNumber: number;

    constructor (
        private timeService: TimeService
    ) { }

    ngOnInit (): void {
        this.storyTimeSince = this.timeService.calculateTimeSince(this.story.time);
        this.storyNumber = this.storyIndex + 1 + (this.pageNumber * this.pageSize)
    }
}
