import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  calculateTimeSince (time: number): string {
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

    if (years === 1) return `${years} year ago`;
    else if (years > 1) return `${years} years ago`;
    else if (months === 1) return `${months} month ago`;
    else if (months > 1) return `${months} months ago`;
    else if (days === 1) return `${days} day ago`;
    else if (days > 1) return `${days} days ago`;
    else if (hours === 1) return `${hours} hour ago`;
    else if (hours > 1) return `${hours} hours ago`;
    else if (minutes === 1) return `${minutes} minute ago`;
    else if (minutes > 1) return `${minutes} minutes ago`;
  }
}
