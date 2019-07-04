import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario5Component2Component } from './component2/component2.component';
import { Scenario5Component3Component } from './component3/component3.component';
import { Scenario5Component1Component } from './component1/component1.component';

@NgModule({
  declarations: [
    Scenario5Component1Component,
    Scenario5Component2Component,
    Scenario5Component3Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Scenario5Component1Component,
    Scenario5Component2Component,
    Scenario5Component3Component
  ]
})
export class Scenario5Module { }
