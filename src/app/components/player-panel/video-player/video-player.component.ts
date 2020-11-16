import {
  Component,
  Input,
  OnInit,
  OnChanges,
  ɵɵNgOnChangesFeature,
  SimpleChanges,
} from '@angular/core';
import { Quote, Song } from '../../../model/song';
// import * as NGYTPackage from '../../package.json';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent {
  @Input() song: Song;
  @Input() quote: Quote;
  startTime: number;

  id = 'qDuKsiwS5xw';
  playerVars = {
    cc_lang_pref: 'en',
    autoplay: true,
  };
  version = '...';
  private player;
  private ytEvent;

  constructor() {
    // this.version = NGYTPackage['dependencies']['ngx-youtube-player'].replace('^', '');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['song']?.currentValue || changes['quote']?.currentValue) {
      this.startTime = changes.song ? (this.startTime = 0) : this.quote.offset;
      this.player.cueVideoById(this.song.youtubeId, this.startTime).playVideo();
    }
  }

  savePlayer(player) {
    this.player = player;
  }

  onStateChange(event) {
    this.ytEvent = event.data;
  }

  // playVideo  () {
  //   this.player.loadVideoById(this.song.youtubeId);
  //   // this.player.playVideo();
  // }

  // pauseVideo() {
  //   this.player.pauseVideo();
  // }
}
