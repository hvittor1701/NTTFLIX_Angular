import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './modules/pages/home/home.component';
import { CarouselComponent } from './modules/pages/home/components/carousel/carousel.component';
import { MovieResultsComponent } from './modules/pages/movie-results/movie-results.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './modules/pages/movie-details/movie-details.component';
import { FavoritesComponent } from './modules/pages/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    MovieResultsComponent,
    MovieDetailsComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
