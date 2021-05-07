import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {PostsOrPages} from '@tryghost/content-api';
import {PostsService} from '../../services/posts.service';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts$: Observable<PostsOrPages>;
  defaultAvatarImage: string;

  ellipsis = {'white-space': 'nowrap', overflow: 'hidden', 'text-overflow': 'ellipsis', flex: 1, 'min-width': 0};

  constructor(private readonly postsService: PostsService,
              private readonly router: Router,
              public readonly appComponent: AppComponent) {
    this.defaultAvatarImage = this.appComponent.defaultAvatarImage;
  }

  ngOnInit(): void {
    this.posts$ = this.postsService.getPosts();
    // @ts-ignore
    if (localStorage.theme === 'dark' || (!'theme' in localStorage && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('html').classList.add('dark');
    } else if (localStorage.theme === 'dark') {
      document.querySelector('html').classList.add('dark');
    }
  }

  navigatePost(postSlug): void {
    this.router.navigate(['post', postSlug]);
  }



}
