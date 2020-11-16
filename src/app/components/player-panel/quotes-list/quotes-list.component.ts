import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Song, Quote } from '../../../model/song';
import { SongServiceService } from '../../../service/song-service.service';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.scss'],
})
export class QuotesListComponent implements OnInit {
  constructor() {}

  @Input() quotes: Quote[];
  @Output() selectedQuote: EventEmitter<Quote> = new EventEmitter<Quote>();
  offsetSelected: number;

  ngOnInit(): void {}

  selectQuote(quote: Quote) {
    this.offsetSelected = quote.offset;
    this.selectedQuote.emit(quote);
  }
}
