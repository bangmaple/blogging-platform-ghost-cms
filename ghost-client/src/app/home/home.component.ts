import {Component, OnInit} from '@angular/core';
import { Observable} from 'rxjs';
import { PostsOrPages} from '@tryghost/content-api';
import {PostsService} from '../../services/posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts$: Observable<PostsOrPages>;

  constructor(private readonly postsService: PostsService,
              private readonly router: Router) {
  }

  ngOnInit(): void {
    this.posts$ = this.postsService.getPosts();
  }

  navigatePost(postSlug): void {
    this.router.navigate(['post', postSlug]);
  }
}
