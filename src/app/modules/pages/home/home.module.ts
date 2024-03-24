import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from './components/carousel/carousel.module'; 
import { HomeComponent } from './home.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, CarouselModule, CoreModule], 
})
export class HomeModule { }
