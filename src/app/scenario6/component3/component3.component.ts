import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scenario6component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Scenario6Component3Component implements OnInit {
  @Input('parentData') public property;

  constructor() { }

  ngOnInit() {
  }

}
