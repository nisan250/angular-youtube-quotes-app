import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SearchPanelComponent} from './components/search-panel/search-panel.component';
import {SearchInputComponent} from './components/search-panel/search-input/search-input.component';
import {SearchListComponent} from './components/search-panel/search-list/search-list.component';
import {HeaderComponent} from './components/header/header.component';
import {PlayerPanelComponent} from './components/player-panel/player-panel.component';
import {VideoPlayerComponent} from './components/player-panel/video-player/video-player.component';
import {QuotesListComponent} from './components/player-panel/quotes-list/quotes-list.component';
import {NgxYoutubePlayerModule} from 'ngx-youtube-player';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchPanelComponent,
    SearchInputComponent,
    SearchListComponent,
    HeaderComponent,
    PlayerPanelComponent,
    VideoPlayerComponent,
    QuotesListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxYoutubePlayerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
