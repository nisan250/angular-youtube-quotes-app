import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Song} from '../model/song';
import {catchError} from 'rxjs/operators';
import {Observable, Subject, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SongServiceService {
  // creating private subject - means we can only access the subject methods from this service
  private selectedSongSource = new Subject<Song | null>();

  // Subject---------------
  // since we made the subject private, we need to expose a property that provide the associated observable
  selectedSongChanges$ = this.selectedSongSource.asObservable(); // .asObservable() - exposing the observable

  constructor(private http: HttpClient) {
  }

  // we need to push data into the subject observable sequence, then the components can receive notification
  changeSelectedSong(selectedSong: Song | null): void {
    this.selectedSongSource.next(selectedSong);
    // console.log('in service', this.selectedSongSource);
  }


  // ---get data from api server---
  getSongs(): Observable<Song[]> {
    return this.http
      .get<Song[]>('https://glacial-escarpment-40412.herokuapp.com/songs ')
      .pipe(
        catchError(error => this.handleError(error))
      );
  }

  // ---get data from json---
  // getSongs(): Observable<Song[]> {
  //   return this.http
  //     .get<Song[]>('/assets/api/songs.json')
  //     .pipe(
  //       tap(data => console.log(JSON.stringify(data))),
  //       catchError(this.handleError)
  //     );
  // }

  // ---get data from javascript array---
  // getSongs(): Observable<Song[]> {
  //   //.1
  //   // const subject = new Subject<Song[]>();
  //   // setTimeout(() => {
  //   //   subject.next(songs); subject.complete();
  //   // }, 100);
  //   // console.log('subject returned', subject);
  //   // return subject;

  //   //.2
  //   return of(songs)
  //     .pipe(
  //       delay(100),
  //       catchError(this.handleError)
  //     );
  // }

  private handleError(err): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
