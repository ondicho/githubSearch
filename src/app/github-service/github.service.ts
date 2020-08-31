import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { Github } from '../githubUsername';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username='ondicho';
  
  github:Github;

  constructor(private http:HttpClient) { 
    getUser(){
      return this.http.get('https://api.github.com/users'+ this.username).map(res => res.json())
    }
  }
}
