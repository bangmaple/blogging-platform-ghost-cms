import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {PostOrPage} from '@tryghost/content-api';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from '../../services/posts.service';
import {flatMap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  code = `&lt;header class="site-header outer"&gt;
  &lt;div class="inner"&gt;
    {{&gt; "site-nav"}}
  &lt;/div&gt;
&lt;/header&gt;
					`;
  post$: Observable<PostOrPage>;

  constructor(private readonly router: Router,
              private readonly route: ActivatedRoute,
              private readonly postsService: PostsService) { }

  ngOnInit(): void {
    this.post$ = this.route.paramMap.pipe(flatMap(r => {
      return this.postsService.getPost(r.get('slug'));
    }));
  }

}
