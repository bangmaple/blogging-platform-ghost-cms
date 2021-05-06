import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SanitizehtmlPipe } from './sanitizehtml.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent,
    HomeComponent,
    SanitizehtmlPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
