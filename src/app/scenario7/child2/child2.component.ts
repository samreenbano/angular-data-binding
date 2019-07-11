import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-scenario7child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Scenario7Child2Component implements OnInit {
public data1= '';
  constructor(private service : MyServiceService) { 
    this.service.data.subscribe(
      data=>{ 
        console.log(data);
        this.data1=data
      }
    );
    }

  ngOnInit() {
  }

}
