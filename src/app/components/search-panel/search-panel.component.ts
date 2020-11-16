import { Component, OnInit } from '@angular/core';
import { Song } from '../../model/song';
import { SongServiceService } from '../../service/song-service.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {

  constructor(private songServiceService: SongServiceService) { }

  songs: Song[] = [];
  searchedSongs: Song[] = [];

  ngOnInit(): void {
    this.songServiceService.getSongs().subscribe(
      (data: Song[]) => {
        this.songs = data;
        this.searchedSongs = data;
      }),
      (error/*: BookTrackerError*/) => console.log(error),
      () => console.log("getting songs result from json")
  }

  handleSearch(searchBy:string): void {
    console.log(searchBy);
    searchBy = searchBy.toLocaleLowerCase();
    //console.log(this.songs.filter((song: Song) => song.title.toLocaleLowerCase().indexOf(searchBy) !== -1));   
    this.searchedSongs = this.songs.filter((song: Song) =>
      song.title.toLocaleLowerCase().indexOf(searchBy) !== -1);
  }
}
