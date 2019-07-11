import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-scenario7child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Scenario7Child1Component implements OnInit {
  constructor(private service: MyServiceService) { }

  ngOnInit() {
  }
  onClick(value){
    // console.log(value);
    this.service.getMethod(value);
  }

}
