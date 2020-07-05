import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { StoryList } from '../models/story-list';
import { Story } from '../models/story';


const BASE_URL: string = 'https://hacker-news.firebaseio.com/v0/';

@Injectable({
  providedIn: 'root'
})

export class StoryService {

  constructor(private httpClient: HttpClient) { }

  getBestStories (): Observable<StoryList> {
    return this.httpClient
      .get(`${BASE_URL}/newstories.json`)
      .pipe(map((data: any) => new StoryList(data)));
  }

  getStory (storyId: number): Observable<Story> {
    return this.httpClient
      .get(`${BASE_URL}/item/${storyId}.json`)
      .pipe(map((data: any) => new Story(data)));
  }
}
