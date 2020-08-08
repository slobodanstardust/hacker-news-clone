export class Comment {
    id: number;
    userAuthor: string;
    respondTo: string;
    text: string;
    time: number;
    rankedCommentList: number[];
    type: string;

    constructor (newComment: any) {
        this.id = newComment && newComment.id || null;
        this.userAuthor = newComment && newComment.by || '';
        this.respondTo = newComment && newComment.parent || '';
        this.text = newComment && newComment.text || '';
        this.time = newComment && newComment.time || null;
        this.rankedCommentList = newComment && newComment.kids || [];
        this.type = newComment && newComment.type || '';
    }
}
