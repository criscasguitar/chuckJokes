import { Component } from '@angular/core';
import { ApiChuckService } from '../api-chuck.service';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent {

  getInfo:any;

  constructor(private jokeService: ApiChuckService){
    
  }

  getJokeService() {
    this.jokeService.getRandomJoke().subscribe((data)=>{
      this.getInfo=data
    })
  }
 
}
