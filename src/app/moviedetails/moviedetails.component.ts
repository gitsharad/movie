import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieAttribute, MovieService } from '../movie.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent {
  movie!: MovieAttribute;
  title:any
  errorMessage: any;
  constructor(private _movieService: MovieService, private activateRoute: ActivatedRoute){}
  ngOnInit():void{
    this.activateRoute.paramMap.subscribe((para)=>{
      if(para.get('id')){
        this.title = para.get('id');
        this._movieService.getMovieDetails(this.title).subscribe((moviedata)=>{
          this.movie = moviedata[0];
        },(err)=>{
          this.errorMessage = err;
      }) 
      }
    })
    setTimeout(()=>{this._movieService.ishomepage.next(false);},0)
  }
  ngOnDestroy(): void{
   this._movieService.ishomepage.next(true);
  }
}
