import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Quote, Song} from '../../../model/song';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements OnChanges {
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
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.song?.currentValue || changes.quote?.currentValue) {
      this.startTime = changes.song ? (this.startTime = 0) : this.quote.offset;
      this.player.cueVideoById(this.song.youtubeId, this.startTime).playVideo();
    }
  }

  savePlayer(player): void {
    this.player = player;
  }

  onStateChange(event): void {
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
