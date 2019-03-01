import { Component, Injectable } from '@angular/core';
import { MoviesServiceService } from './movies-service.service';
import { Http } from '@angular/http';
import { Movie } from './models/movie.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/styles/css/app.component.css']
})

@Injectable()
export class AppComponent {

  title = 'dg-movie-coding-challenge';
  movieList: Movie[] = [];
  filteredMovies = '';

  /// MovieServiceService should be MovieService - sorry about that :) 
  constructor(private movieService: MoviesServiceService, http: Http) {

    this.movieService.getMovies()
      .subscribe(
        (response) => this.getMovieDetails(response['Search']),
        (error) => console.log(error)
      );

  }

  getMovieDetails(movies: any[]) {

    for (let movie of movies) {
      this.movieService.getMoviesDetails(movie)
        .subscribe(
          (response) => this.movieList.push(<Movie>response),
          (error) => console.log(error)
        );

    }
  }

  


}