import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Player } from 'src/app/Player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  players!:any;

  constructor(private data:DataService) { }

  imagePath:string='assets/images/lets_play.jpg';

  ngOnInit(): void {
    this.data.getUsers().subscribe(data=> {
      this.players=data;
    })
  }

  deletePlayer(player:Player){
    return this.data.deletePlayer(player).subscribe((player)=>this.data.getUsers().subscribe(data=>this.players=data));
  }

}
