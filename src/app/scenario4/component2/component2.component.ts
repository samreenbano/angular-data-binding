import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario4component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Scenario4Component2Component implements OnInit {
 
  constructor() { }

   @Output() public childEvent= new EventEmitter();
  onClick(value){
    console.log(value);
    this.childEvent.emit(value);
  }
  ngOnInit() {
  }

}
