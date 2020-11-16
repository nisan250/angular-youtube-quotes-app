import { Component, Input, OnInit } from '@angular/core';
import { SongServiceService } from '../../../service/song-service.service';
import { Song } from './../../../model/song';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent implements OnInit {
  @Input() songsList: Song[];

  constructor(private songServiceService: SongServiceService) {}

  ngOnInit(): void {}

  onSongSelected(selectedSong: Song) {
    this.songServiceService.changeSelectedSong(selectedSong);
  }
}
