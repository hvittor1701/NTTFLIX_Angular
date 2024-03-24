import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
    declarations: [MovieDetailsComponent],
    imports: [CommonModule, CoreModule], 
  })
  export class HomeModule { }