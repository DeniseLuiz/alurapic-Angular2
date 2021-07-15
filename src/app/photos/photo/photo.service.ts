import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const API = 'http://localhost:3000';

@Injectable({providedIn: 'root'})
export class PhotoService {


  constructor(private httpclient: HttpClient) {}

  listFrom(){

    return this.httpclient.get<Photo[]>(API + '/photos');

  }
}
