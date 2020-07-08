export class Story {
  id: number;
  userAuthor: string;
  title: string;
  sourceUrl: string;
  text: string;
  time: number;
  score: number;
  commentCount: number;
  rankedCommentList: number[];
  type: string;

  constructor (newStory: any) {
    this.id = newStory && newStory.id || null;
    this.userAuthor = newStory && newStory.by || '';
    this.title = newStory && newStory.title || '';
    this.sourceUrl = newStory && newStory.url || '';
    this.text = newStory && newStory.text || '';
    this.time = newStory && newStory.time || null;
    this.score = newStory && newStory.score || 0;
    this.commentCount = newStory && newStory.descendants || 0;
    this.rankedCommentList = newStory && newStory.kids || [];
    this.type = newStory && newStory.type || '';
  }
}
