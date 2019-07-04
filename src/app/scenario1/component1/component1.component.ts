import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario1component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Scenario1Component1Component implements OnInit {

  constructor() { }
  onClick(value){
    console.log(value);
  }

  ngOnInit() {
  }

}
