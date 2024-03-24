import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MovieDetails {
  Title: string;
  Year: string;
  Poster: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Awards: string;
  Ratings: Array<{ Source: string; Value: string; }>;
  Rated?: string;  
  Released?: string; 
  imdbID: string;
}


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apikey = 'af777a9e';

  constructor(private http: HttpClient) { }

  searchMovies(query: string): Observable<any> {
    return this.http.get(`https://www.omdbapi.com/?apikey=${this.apikey}&s=${encodeURIComponent(query)}`);
  }

  getMovieDetails(imdbId: string): Observable<MovieDetails> {
    const url = `https://www.omdbapi.com/?apikey=${this.apikey}&i=${imdbId}`;
    return this.http.get<MovieDetails>(url);
  }
}


