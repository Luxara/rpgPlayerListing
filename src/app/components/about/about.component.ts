import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  imagePath:string='assets/images/respect_rules.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
