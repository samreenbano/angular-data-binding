import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scenario3component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Scenario3Component2Component implements OnInit {

  constructor() { }
  @Input('parentData') public name;

  ngOnInit() {
  }

}
