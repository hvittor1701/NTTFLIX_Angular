import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieDetails } from 'src/app/core/services/movie-api.service'; 
import { FavoritesService } from 'src/app/core/services/favorites.service'; 

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoriteMovies: MovieDetails[] = [];

  constructor(
    private favoritesService: FavoritesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    this.favoritesService.getFavoriteMoviesDetails().subscribe(movies => {
      this.favoriteMovies = movies;
    });
  }

  toggleFavorite(imdbID: string, event: Event): void {
    event.stopPropagation(); 
    this.favoritesService.removeFavorite(imdbID);
    this.loadFavorites(); 
  }

  navigateToDetails(imdbID: string): void {
    this.router.navigate(['/movie-details', imdbID]);
  }
}



