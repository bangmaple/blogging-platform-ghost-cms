import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {PostOrPage, PostsOrPages} from '@tryghost/content-api';
import {GHOST_API} from '../constants/api.constant';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() {
  }

  getPosts(): Observable<PostsOrPages> {
    return from(GHOST_API.posts
      .browse({
        include: ['authors', 'tags', 'count.posts'],
        limit: 'all'
      })).pipe(map(p => p));
  }

  getPost(postSlug: string): Observable<PostOrPage> {
    return from(GHOST_API.posts
      .read({
        slug: postSlug
      })).pipe(map(p => p));
  }
}
