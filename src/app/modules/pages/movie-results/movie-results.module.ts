import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieResultsComponent } from './movie-results.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [MovieResultsComponent],
  imports: [CommonModule, CoreModule], 
})
export class HomeModule { }