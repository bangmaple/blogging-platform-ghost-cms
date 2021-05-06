import {Action} from '@ngrx/store';

export const UPVOTE = '[PostDetail] Upvote';
export const DOWNVOTE = '[PostDetail] Downvote';

export class Upvote implements Action {
  readonly type = UPVOTE;
}

export class Downvote implements Action {
  readonly type = DOWNVOTE;
}

export type All = Upvote | Downvote;
