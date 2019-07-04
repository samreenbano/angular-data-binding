import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario6Component3Component } from './component3/component3.component';
import { Scenario6Component2Component } from './component2/component2.component';
import { Scenario6Component1Component } from './component1/component1.component';

@NgModule({
  declarations: [
    Scenario6Component1Component,
    Scenario6Component2Component,
    Scenario6Component3Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Scenario6Component1Component,
    Scenario6Component2Component,
    Scenario6Component3Component
  ]
})
export class Scenario6Module { }
