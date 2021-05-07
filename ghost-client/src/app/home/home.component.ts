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

  ellipsis = {'white-space': 'nowrap', 'overflow': 'hidden', 'text-overflow': 'ellipsis', 'flex': 1, 'min-width': 0}

  constructor(private readonly postsService: PostsService,
              private readonly router: Router) {
  }

  ngOnInit(): void {
    this.posts$ = this.postsService.getPosts();
   //this.posts$.toPromise().then(e => e[0].da)
   // @ts-ignore
   if (localStorage.theme === 'dark' || (!'theme' in localStorage && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.querySelector('html').classList.add('dark')
} else if (localStorage.theme === 'dark') {
    document.querySelector('html').classList.add('dark')
}
  }

  navigatePost(postSlug): void {
    this.router.navigate(['post', postSlug]);
  }

  switchTheme() {
      console.log("hi");
        let htmlClasses = document.querySelector('html').classList;
        if(localStorage.theme == 'dark') {
            htmlClasses.remove('dark');
            localStorage.removeItem('theme')
        } else {
            htmlClasses.add('dark');
            localStorage.theme = 'dark';
        }
  }
  
}
