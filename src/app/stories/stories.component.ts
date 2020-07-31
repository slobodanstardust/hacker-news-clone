import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StoryService } from '../core/services/story.service';
import { PageCutterService } from '../core/services/page-cutter.service';
import { Story } from '../core/models/story';


@Component({
    selector: 'hnc-stories',
    templateUrl: './stories.component.html'
})

export class StoriesComponent implements OnInit {
    urlPath: string;

    storyIds: number[] = [];
    pages: number[][] = [];
    stories: Story[][] = [];

    pageNumber: number = 0;
    pageSize: number = 50;

    constructor(
        private activatedRoute: ActivatedRoute,
        private storyService: StoryService,
        private pageCutter: PageCutterService
    ) { }

    ngOnInit(): void {
        this.urlPath = this.activatedRoute.snapshot.url[0].path;

        if (this.urlPath === 'home') { // If it acts as a home page.
            this.storyService
                .getTopStories()
                .subscribe((data: number[]) => {
                    this.storyIds = data;
                    this.pages = this.pageCutter.cutToPages(this.storyIds, this.pageSize);

                    this.storyService
                        .getStoriesData(this.pages[this.pageNumber])
                        .subscribe((data: Story[]) => this.stories[this.pageNumber] = data);
                });
        } else if (this.urlPath === 'new') { // If it acts as a 'new' page.
            this.storyService
                .getNewStories()
                .subscribe((data: number[]) => {
                    this.storyIds = data;
                    this.pages = this.pageCutter.cutToPages(this.storyIds, this.pageSize);

                    this.storyService
                        .getStoriesData(this.pages[this.pageNumber])
                        .subscribe((data: Story[]) => this.stories[this.pageNumber] = data);
                });
        }
    }

    onPageChange(pageNumber: number): void {
        this.pageNumber = pageNumber;

        if (!this.stories[pageNumber]) {
            this.storyService
                .getStoriesData(this.pages[this.pageNumber])
                .subscribe((data: Story[]) => this.stories[pageNumber] = data);
        }
    }

    onPageSizeChange (pageSize: number): void {
        this.stories = [];
        this.pageNumber = 0;
        this.pageSize = pageSize;

        this.pages = this.pageCutter.cutToPages(this.storyIds, this.pageSize);
        console.log(this.pages[this.pageNumber])

        this.storyService
            .getStoriesData(this.pages[this.pageNumber])
            .subscribe((data: Story[]) => this.stories[this.pageNumber] = data);
    }
}
