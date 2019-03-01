import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Movie } from '../app//models/movie.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MoviesServiceService {

  movieList: any[]

  constructor(private http: Http) { }

  /// Get all Batman movies
  getMovies() {
    return this.http.get('http://www.omdbapi.com/?apikey=722fc3e1&S=Batman&type=movie')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

  /// Get movie details
  getMoviesDetails(movie: any) {
    return this.http.get('http://www.omdbapi.com/?apikey=722fc3e1&i=' + movie.imdbID)
      .map(
        (response: Response) => {
          const data = response.json();
          return <Movie>data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

}
