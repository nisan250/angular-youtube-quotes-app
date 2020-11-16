import {Component, OnDestroy, OnInit} from '@angular/core';
import {Song} from '../../model/song';
import {SongServiceService} from '../../service/song-service.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit, OnDestroy {
  songs: Song[] = [];
  searchedSongs: Song[] = [];
  sub: Subscription;

  constructor(private songServiceService: SongServiceService) {
  }

  ngOnInit(): void {
    this.sub = this.songServiceService.getSongs().subscribe((data: Song[]) => {
      this.songs = data;
      this.searchedSongs = data;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  handleSearch(searchBy: string): void {
    searchBy = searchBy.toLocaleLowerCase();
    this.searchedSongs = this.songs.filter((song: Song) => {
      return song.title.toLocaleLowerCase().indexOf(searchBy) !== -1;
    });
  }
}
