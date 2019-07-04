import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-scenario5component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Scenario5Component2Component implements OnInit {
  @Output() public event1= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  pass(value){
    this.event1.emit(value);
  }
}
