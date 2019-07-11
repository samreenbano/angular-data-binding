import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario7ParentComponent } from './parent/parent.component';
import { Scenario7Child1Component } from './child1/child1.component';
import {  Scenario7Child2Component } from './child2/child2.component';

@NgModule({
  declarations: [
    Scenario7ParentComponent,
    Scenario7Child1Component,
    Scenario7Child2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Scenario7ParentComponent,
    Scenario7Child1Component,
    Scenario7Child2Component
  ]
})
export class Scenario7Module { }
