import { Component, OnInit } from '@angular/core';

import { StoryService } from '../services/story.service';


@Component({
  selector: 'hnc-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})

export class MainViewComponent implements OnInit {
  topStories: number[];
  pages: number[][] = [];

  pagination: { page: number, pageSize: number } = {
    page: 0,
    pageSize: 100,
  }

  constructor(private storyService: StoryService) { }

  ngOnInit(): void {
    this.storyService
      .getTopStories()
      .subscribe((data: number[]) => {
        this.topStories = data;
        this.cutToPages(this.topStories, this.pagination.pageSize);
      });
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

    this.cutToPages(this.topStories, this.pagination.pageSize);
  }
}
