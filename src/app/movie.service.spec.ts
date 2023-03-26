import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'

import { MovieService } from './movie.service';
import { HttpClient } from '@angular/common/http';

describe('MovieService', () => {
  let service: MovieService;
  let createspyobj: jasmine.SpyObj<HttpClient>
      createspyobj = jasmine.createSpyObj('HttpClient',['get'])
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [MovieService,{provide:HttpClient,useValue:createspyobj}]
    });
    service = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
