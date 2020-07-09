import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StoryService } from '../core/services/story.service';


@Component({
  selector: 'hnc-stories',
  templateUrl: './stories.component.html'
})

export class StoriesComponent implements OnInit {
  stories: number[];
  pages: number[][] = [];
  urlPath: string;

  pagination: { page: number, pageSize: number } = {
    page: 0,
    pageSize: 100,
  }

  constructor(
    private storyService: StoryService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.urlPath = this.activatedRoute.snapshot.url[0].path;

    if (this.urlPath === 'home') {
      this.storyService
        .getTopStories()
        .subscribe((data: number[]) => {
          this.stories = data;
          this.cutToPages(this.stories, this.pagination.pageSize);
        });
    } else if (this.urlPath === 'new') {
      this.storyService
        .getNewStories()
        .subscribe((data: number[]) => {
          this.stories = data;
          this.cutToPages(this.stories, this.pagination.pageSize);
        });
    }
  }

  cutToPages (list: number[], pageSize: number): void {
    let tempList: number[][] = []; // Need this so I can detect change in pagination component.

    for (let i = 0; i < list.length; i += pageSize) {
      tempList.push(list.slice(i, i + pageSize));
    }

    this.pages = tempList;
  }

  onPageChange (pagination: { page: number, pageSize: number }): void {
    this.pagination = pagination

    this.cutToPages(this.stories, this.pagination.pageSize);
  }
}
