import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Player } from 'src/app/Player';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  imagePath:string='assets/images/join_now.jpg';
  playerForm:FormGroup;
  submitted:boolean=false;
  success:boolean=false;
  dataService:DataService;

  name!:string;
  characterName!:string;
  race!:string;
  class!:string;

  constructor(private formBuilder:FormBuilder, dataService:DataService) {
    this.playerForm=this.formBuilder.group({
      playerName: ['', Validators.required],
      characterName: ['', Validators.required],
      race: ['', Validators.required],
      class: ['', Validators.required]
    })
    this.dataService=dataService;
   }

  onSubmit(){
    this.submitted=true;

    if(this.playerForm.invalid){
      return
    }
      
    this.success=true;

    this.name=this.playerForm.controls['playerName'].value;
    this.characterName=this.playerForm.controls['characterName'].value;
    this.race=this.playerForm.controls['race'].value;
    this.class=this.playerForm.controls['class'].value;

    const newPlayer={
      name:this.name,
      characterName:this.characterName,
      race:this.race,
      class:this.class
    }

    this.dataService.addPlayer(newPlayer).subscribe();

    this.playerForm.reset();
    this.submitted=false;

    setTimeout(()=>{                           
      this.success = false;}, 3000);

  }

  ngOnInit(): void {
  }

}
