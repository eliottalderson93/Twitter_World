import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobeComponent } from './globe/globe.component';
import { FeedComponent } from './feed/feed.component';
import { TopContainerComponent } from './top-container/top-container.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobeComponent,
    FeedComponent,
    TopContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
