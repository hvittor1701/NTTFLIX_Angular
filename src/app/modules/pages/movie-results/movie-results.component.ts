import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movie-api.service';
import { FavoritesService } from 'src/app/core/services/favorites.service';

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

@Component({
  selector: 'app-movie-results',
  templateUrl: './movie-results.component.html',
  styleUrls: ['./movie-results.component.css'],
})
export class MovieResultsComponent implements OnInit {
  movies: Movie[] = [];
  expandedMovieId: string | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const query = params['query'];
      if (query) {
        this.moviesService.searchMovies(query).subscribe({
          next: (response) => {
            this.movies = response.Search || [];
          },
          error: (error) => {
            console.error('Error fetching movies:', error);
            this.movies = [];
          }
        });
      }
    });
  }

  toggleFavorite(imdbID: string, event: MouseEvent): void {
    event.stopPropagation();
    if (this.favoritesService.isFavorite(imdbID)) {
      this.favoritesService.removeFavorite(imdbID);
    } else {
      this.favoritesService.addFavorite(imdbID);
    }
  }

  isFavorite(imdbID: string): boolean {
    return this.favoritesService.isFavorite(imdbID);
  }
}