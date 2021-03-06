import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { global } from '../services/global';

@Injectable({
  providedIn: 'root',
})
export class ProjectService{
  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = global.url;
  }

  testService() {
    return 'Probando el sevicio de angular';
  }
}
