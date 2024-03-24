import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movie-api.service';
import { MovieDetails } from 'src/app/core/services/movie-api.service';
import { FavoritesService } from 'src/app/core/services/favorites.service'; 

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails!: MovieDetails;
  imdbRating: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private favoritesService: FavoritesService 
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const imdbID = params['id'];
      this.moviesService.getMovieDetails(imdbID).subscribe(details => {
        this.movieDetails = details;
        this.processRatings(details.Ratings);
      });
    });
  }

  toggleFavorite(): void {
    if (this.favoritesService.isFavorite(this.movieDetails.imdbID)) {
      this.favoritesService.removeFavorite(this.movieDetails.imdbID);
    } else {
      this.favoritesService.addFavorite(this.movieDetails.imdbID);
    }
  }

  isFavorite(): boolean {
    return this.favoritesService.isFavorite(this.movieDetails.imdbID);
  }

  private processRatings(ratings: Array<{ Source: string; Value: string; }>): void {
    const imdbRatingObject = ratings.find(rating => rating.Source === "Internet Movie Database");
    this.imdbRating = imdbRatingObject ? `Internet Movie Database: ${imdbRatingObject.Value}` : '';
  }
}


