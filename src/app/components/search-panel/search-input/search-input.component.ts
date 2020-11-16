import {AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {fromEvent, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, pluck} from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('input') searchInput: ElementRef;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  sub: Subscription;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.sub = fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        pluck('target', 'value'),
        distinctUntilChanged(),
        // filter((value: string) => value.length > 1),
        map((value: string) => value)
      )
      .subscribe((value) => this.search.emit(value));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
