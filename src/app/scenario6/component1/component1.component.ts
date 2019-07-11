import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario6component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Scenario6Component1Component implements OnInit {
  public property='';

  constructor() { }

  ngOnInit() {
  }
  function(value){
    this.property=value;
  }

}
