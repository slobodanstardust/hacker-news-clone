import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class TimeService {

  constructor() { }

  calculateTimeSince (time: number): string {
    const timeNow: number = new Date().getTime();
    const timeOfStory: number = time * 1000;
    const timeDiffernce: number = (timeNow - timeOfStory) / 1000;

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
