import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario4Component1Component } from './component1/component1.component';
import { Scenario4Component2Component } from './component2/component2.component';

@NgModule({
  declarations: [
    Scenario4Component1Component,
    Scenario4Component2Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Scenario4Component1Component,
    Scenario4Component2Component
  ]
})
export class Scenario4Module { }
