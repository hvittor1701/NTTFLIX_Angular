import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MovieDetails, MoviesService } from './movie-api.service';
import { forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  constructor(private moviesService: MoviesService, private http: HttpClient) {}

  addFavorite(imdbID: string): void {
    let favorites = this.getFavorites();
    if (!favorites.includes(imdbID)) {
      favorites.push(imdbID);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }

  removeFavorite(imdbID: string): void {
    let favorites = this.getFavorites();
    favorites = favorites.filter(id => id !== imdbID);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  getFavorites(): string[] {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  getFavoriteMoviesDetails(): Observable<MovieDetails[]> {
    const favorites = this.getFavorites();
    if (favorites.length === 0) {
      return of([]);
    }
    return forkJoin(favorites.map(imdbID => this.moviesService.getMovieDetails(imdbID)));
  }

  isFavorite(imdbID: string): boolean {
    const favorites = this.getFavorites();
    return favorites.includes(imdbID);
  }
}


