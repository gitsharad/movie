import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';

import { LatestmoviesComponent } from './latestmovies.component';

describe('LatestmoviesComponent', () => {
  let component: LatestmoviesComponent;
  let fixture: ComponentFixture<LatestmoviesComponent>;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestmoviesComponent ],
      imports:[RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit()
    expect(component).toBeTruthy();
  });

  it('#getMovieDesc should return stubbed value from a spy', () => {
    const movieservicespy =
      jasmine.createSpyObj('MovieService', ['getMovieDesc']);

    const stubValue = of([]);
    movieservicespy.getMovieDesc.and.returnValue(stubValue);
    expect(movieservicespy.getMovieDesc())
      .toBe(stubValue);
    expect(movieservicespy.getMovieDesc.calls.count())
      .toBe(1);
    expect(movieservicespy.getMovieDesc.calls.mostRecent().returnValue)
      .toBe(stubValue);

    expect(component.movies).toEqual([])

  });

  it('#getMovieDesc should return stubbed error from a spy', () => {
    const movieservicespy =
      jasmine.createSpyObj('MovieService', ['getMovieDesc']);

    const stubError = throwError;
    movieservicespy.getMovieDesc.and.returnValue(stubError);
    expect(movieservicespy.getMovieDesc())
      .toBe(stubError);
    expect(movieservicespy.getMovieDesc.calls.count())
      .toBe(1);
    expect(movieservicespy.getMovieDesc.calls.mostRecent().returnValue)
      .toBe(stubError);

  });
});
