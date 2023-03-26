import { Component} from '@angular/core';
import { MovieAttribute, MovieService } from '../movie.service';

@Component({
  selector: 'app-latestmovies',
  templateUrl: './latestmovies.component.html',
  styleUrls: ['./latestmovies.component.css']
})
export class LatestmoviesComponent {
  movies:MovieAttribute[] = []
  errorMessage: string='';
 
 constructor(private _movieService: MovieService ){}
ngOnInit():void{
  this._movieService.getMovieDesc().subscribe((moviedata)=>{
    this.movies = moviedata;
  },(err)=>{
    this.errorMessage = err.message;
}) 
}
}
