import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieAttribute, MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie home page';
  movies: MovieAttribute[]=[];
  searchForm!: FormGroup;
  ishomepage: boolean = true;
  constructor(private formBuilder: FormBuilder, private _router: Router, private _movieservice:MovieService){}
  
  ngOnInit():void {
    this.searchForm =  this.formBuilder.group({
      searchinput:['',[Validators.required]]
    })
    this._movieservice.ishomepage.subscribe((res)=> {
      this.ishomepage = res
    }) 
  }

  onSearch(): any{
    this._router.navigateByUrl('/search?title='+this.searchForm.controls['searchinput'].value)
  }
  
}
