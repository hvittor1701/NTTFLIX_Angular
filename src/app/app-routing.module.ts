import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { MovieResultsComponent } from './modules/pages/movie-results/movie-results.component';
import { MovieDetailsComponent } from './modules/pages/movie-details/movie-details.component';
import { FavoritesComponent } from './modules/pages/favorites/favorites.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'movie-results', component: MovieResultsComponent },
  { path: 'movie-details/:id', component: MovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
