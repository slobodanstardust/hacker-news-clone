import { Component, OnInit } from '@angular/core';

import { StoryList } from '../models/story-list';
import { StoryService } from '../services/story.service';


@Component({
  selector: 'hnc-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})

export class MainViewComponent implements OnInit {
  bestStories: StoryList;
  listSlices: number[][] = [];
  page: number = 0;

  constructor(private storyService: StoryService) { }

  ngOnInit(): void {
    this.storyService
      .getBestStories()
      .subscribe((data: StoryList) => {
        this.bestStories = data;
        this.cutList(this.bestStories.stories, 100);
      });
  }

  cutList (list: number[], sliceSize: number): void {
    for (let i = 0; i < list.length; i += sliceSize) {
      this.listSlices.push(list.slice(i, i + sliceSize));
    }
  }
}
