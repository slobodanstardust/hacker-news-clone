import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SubscriptionLike } from 'rxjs';

import { StoryService } from '../core/services/story.service';
import { PageCutterService } from '../core/services/page-cutter.service';
import { Story } from '../core/models/story';


@Component ({
    selector: 'hnc-stories',
    templateUrl: './stories.component.html'
})

export class StoriesComponent implements OnInit, OnDestroy {
    subscription: SubscriptionLike;
    urlPath: string;

    storyIds: number[];
    pages: number[][] = [];
    stories: Story[][] = [];

    pageNumber: number = 0;
    pageSize: number = 50;

    constructor (
        private activatedRoute: ActivatedRoute,
        private storyService: StoryService,
        private pageCutter: PageCutterService
    ) { }

    ngOnInit (): void {
        this.urlPath = this.activatedRoute.snapshot.url[0].path;

        this.loadStoryData();
    }
    
    ngOnDestroy (): void {
        this.subscription.unsubscribe();
    }

    loadStoryData (): void {
        if (this.urlPath === 'home') { // If it acts as a home page.
            this.subscription = this.storyService
                .getTopStories()
                .pipe(
                    switchMap((data: number[]) => {
                        this.storyIds = data;
                        this.pages = this.pageCutter.cutToPages(this.storyIds, this.pageSize);

                        return this.storyService
                            .getStoriesData(this.pages[this.pageNumber]);
                    })
                )
                .subscribe((data: Story[]) => this.stories[this.pageNumber] = data);

        } else if (this.urlPath === 'new') { // If it acts as a 'new' page.
            this.subscription = this.storyService
                .getNewStories()
                .pipe(
                    switchMap((data: number[]) => {
                        this.storyIds = data;
                        this.pages = this.pageCutter.cutToPages(this.storyIds, this.pageSize);

                        return this.storyService
                            .getStoriesData(this.pages[this.pageNumber]);
                    })
                )
                .subscribe((data: Story[]) => this.stories[this.pageNumber] = data);
        }
    }

    onPageChange (pageNumber: number): void {
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

        this.storyService
            .getStoriesData(this.pages[this.pageNumber])
            .subscribe((data: Story[]) => this.stories[this.pageNumber] = data);
    }
}
