export class StoryList {
  stories: number[];
  count: number;

  constructor (newStories: any) {
    this.stories = newStories || [];
    this.count = this.stories.length || null;
  }
}
