import {Component, OnInit} from '@angular/core';
import GhostContentAPI, {PostOrPage, PostsOrPages} from '@tryghost/content-api';
import {from, Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultAvatarImage = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M3.513 18.998C4.749 15.504 8.082 13 12 13s7.251 2.504 8.487 5.998C18.47 21.442 15.417 23 12 23s-6.47-1.558-8.487-4.002zM12 12c2.21 0 4-2.79 4-5s-1.79-4-4-4-4 1.79-4 4 1.79 5 4 5z" fill="#FFF"></path></g></svg>`;
}
