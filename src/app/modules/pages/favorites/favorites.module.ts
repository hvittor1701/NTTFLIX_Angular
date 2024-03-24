import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [CommonModule, CoreModule], 
})
export class HomeModule { }