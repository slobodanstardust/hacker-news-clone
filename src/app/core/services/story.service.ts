import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { Story } from '../models/story';
import { Comment } from '../models/comment';


const BASE_URL: string = 'https://hacker-news.firebaseio.com/v0/';

@Injectable({
  providedIn: 'root'
})

export class StoryService {

  constructor(private httpClient: HttpClient) { }

  getTopStories (): Observable<number[]> {
    return this.httpClient
      .get(`${BASE_URL}/topstories.json`)
      .pipe(map((data: any) => {
        const stories: number[] = data;
        return stories
      }));
  }

  getNewStories (): Observable<number[]> {
    return this.httpClient
      .get(`${BASE_URL}/newstories.json`)
      .pipe(map((data: any) => {
        const stories: number[] = data;
        return stories
      }));
  }

  getStory (storyId: number): Observable<Story> {
    return this.httpClient
      .get(`${BASE_URL}/item/${storyId}.json`)
      .pipe(map((data: any) => new Story(data)));
  }

  getComment (commentId: number): Observable<Comment> {
    return this.httpClient
      .get(`${BASE_URL}/item/${commentId}.json`)
      .pipe(map((data: any) => new Comment(data)));
  }

  getStoriesData (storyIds: number[]): Observable<Story[]> {
    const storyCalls = storyIds.map((id: number) => this.httpClient.get(`${BASE_URL}/item/${id}.json`));

    return forkJoin(...storyCalls)
      .pipe(map((data: any) => {
        return data.map((item: any) => new Story(item));
      }));
  }
}
