import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieAttribute } from '../movie.service';

import { MoviedetailsComponent } from './moviedetails.component';

describe('MoviedetailsComponent', () => {
  let component: MoviedetailsComponent;
  let fixture: ComponentFixture<MoviedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviedetailsComponent ],
      imports:[RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('#getMovieDetails should return stubbed value from a spy', () => {
    const movieservicespy =
      jasmine.createSpyObj('MovieService', ['getMovieDetails']);

    const stubValue = {} as MovieAttribute;
    movieservicespy.getMovieDetails.and.returnValue(stubValue);
    expect(movieservicespy.getMovieDetails())
      .toBe(stubValue);
    expect(movieservicespy.getMovieDetails.calls.count())
      .toBe(1);
    expect(movieservicespy.getMovieDetails.calls.mostRecent().returnValue)
      .toBe(stubValue);
      fixture.detectChanges()
      expect(component.movie).toEqual(stubValue)
      
  });
  
});
