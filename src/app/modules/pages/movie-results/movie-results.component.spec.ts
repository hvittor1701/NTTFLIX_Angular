import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieResultsComponent } from './movie-results.component';

describe('MovieResultsComponent', () => {
  let component: MovieResultsComponent;
  let fixture: ComponentFixture<MovieResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieResultsComponent]
    });
    fixture = TestBed.createComponent(MovieResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
