import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-github-search-form',
  templateUrl: './github-search-form.component.html',
  styleUrls: ['./github-search-form.component.css']
})
export class GithubSearchFormComponent implements OnInit {

  user: any ;
  repository: any [];
  userName: any;

  constructor(public httpService:HttpService) { }

  findUser(){
    this.httpService.updateUser(this.username);
   
    this.httpService.getUser().subscribe (response=>{
     console.log (response)
      this.user = response
     });
    this.httpService.getRepo().subscribe(repos=>{
      console .log (repos)
      this.repos = [repos]
    });
  
  }
  findRepository(){
   this.httpService.updateUser(this.username);
   this.httpService.getRepo().subscribe(repos=>{
     console .log (repos)
     this.repos = [repos]
   });
 


  ngOnInit(): void {
  }

}
