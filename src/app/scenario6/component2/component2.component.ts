import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-scenario6component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Scenario6Component2Component implements OnInit {
  @Output() public childEvent=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onClick(value){
    console.log(value);
    this.childEvent.emit(value);

  }

}
