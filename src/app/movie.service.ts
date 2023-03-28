import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, filter, map, Observable, retry,  throwError } from 'rxjs';

export interface MovieAttribute {
  year: number; 
  title: string;
  info: movieinfo; 
}

interface movieinfo{
    directors: [];
    release_date: Date;
    rating: number;
    genres: [];
    image_url: string;
    plot: string;
    rank: number;
    running_time_secs: number,
    actors: []
}


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public ishomepage  = new BehaviorSubject<boolean>(true);
  constructor(private _httpClient: HttpClient) { }
  
  getMovieData(searchinput:string):Observable<MovieAttribute[]>{
    return this._httpClient.get<MovieAttribute[]>('assets/moviedata.json').pipe(retry(1), catchError(this.handleError),map(data => 
      data.filter(option => option.title.toLowerCase().includes(searchinput))))
  }

  getMovieDetails(title:string):Observable<MovieAttribute[]>{
    return this._httpClient.get<MovieAttribute[]>('assets/moviedata.json').pipe(retry(1), catchError(this.handleError),
       map(data =>data.filter(option => option.title.toLowerCase() == title.toLowerCase())))
  }

  getMovieDesc():Observable<MovieAttribute[]>{
    return this._httpClient.get<MovieAttribute[]>('assets/latestmoviedata.json').
    pipe(retry(1), catchError(this.handleError))
}

handleError(error:any) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // client-side error
    errorMessage = `Error: ${error.error.message}`;
  } else {
    // server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(() => {
      return errorMessage;
  });
}
}