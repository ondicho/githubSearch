import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { Github } from '../github';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor() { }
}
