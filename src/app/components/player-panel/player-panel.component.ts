import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Quote, Song } from '../../model/song';
import { SongServiceService } from '../../service/song-service.service';

@Component({
  selector: 'app-player-panel',
  templateUrl: './player-panel.component.html',
  styleUrls: ['./player-panel.component.scss'],
})
export class PlayerPanelComponent implements OnInit, OnDestroy {

  constructor(private songServiceService: SongServiceService) {}

  selectedQuote: Quote;
  selectedSong: Song;
  sub: Subscription;
  
  ngOnInit(): void {
    this.sub = this.songServiceService.selectedSongChanges$.subscribe(
      (song) => this.selectedSong = song
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  handleSelectedQuote(quote: Quote) {
    this.selectedQuote = quote;
  }
}
