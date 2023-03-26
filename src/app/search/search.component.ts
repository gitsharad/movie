import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from '../movie.service';
import { MovieAttribute } from "../movie.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  movies: MovieAttribute[] = []
  title:string = ''
  noimageurl: string = 'assets/img/No-Image-Placeholder.png'
  errorMessage:string = ''
  getmovie_subscribe!:Subscription
  constructor(private _movieService: MovieService, 
              private activateRoute: ActivatedRoute){}
ngOnInit():void{
  this.activateRoute.queryParams.subscribe((para)=>{
    this.title = para['title'];
    this._movieService.getMovieData(this.title).subscribe((moviedata)=>{
      this.movies = moviedata;
    },(err)=>{
        this.errorMessage = err.message;
    }) 
    setTimeout(()=>{this._movieService.ishomepage.next(false);},0)
   
  })
 
  
}
ngOnDestroy(): void{
  this._movieService.ishomepage.next(true);
 }
}
 