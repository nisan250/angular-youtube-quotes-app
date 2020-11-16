import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Quote} from '../../../model/song';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.scss'],
})
export class QuotesListComponent implements OnInit {
  @Input() quotes: Quote[];
  @Output() selectedQuote: EventEmitter<Quote> = new EventEmitter<Quote>();

  public offsetSelected: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  public selectQuote($event: any, quote: Quote): void {
    this.offsetSelected = quote.offset;
    this.selectedQuote.emit(quote);
  }
}
