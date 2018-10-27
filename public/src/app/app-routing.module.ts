import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobeComponent } from './globe/globe.component';
import { FeedComponent } from './feed/feed.component';
import { TopContainerComponent } from './top-container/top-container.component';

const routes: Routes = [
  { path: 'app',
    children: [
        {path: 'globe', component: GlobeComponent},
        {path: 'feed', component: FeedComponent, outlet: 'twitter-feed'},
    ],
  },
  { path: '**', redirectTo: "/app/(globe//twitter-feed:feed)"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
