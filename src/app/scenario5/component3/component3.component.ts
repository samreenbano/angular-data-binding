import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Scenario5Component3Component implements OnInit {
  @Output() public event= new EventEmitter();


  constructor() { }

  ngOnInit() {
  }
  onClick(value){
    console.log(value);
    this.event.emit(value);
  }

}
