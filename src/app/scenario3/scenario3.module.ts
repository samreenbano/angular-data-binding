import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario3Component2Component } from './component2/component2.component';
import { Scenario3Component1Component } from './component1/component1.component';

@NgModule({
  declarations: [
    Scenario3Component1Component,
    Scenario3Component2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Scenario3Component1Component,
    Scenario3Component2Component
  ]
})
export class Scenario3Module { }
